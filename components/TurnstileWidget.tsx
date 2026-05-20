'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      remove: (widgetId: string) => void;
    };
  }
}

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
}

export function TurnstileWidget({ onVerify, onExpire, onError }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | undefined>(undefined);
  const [error, setError] = useState(false);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    const renderWidget = () => {
      if (!containerRef.current || !window.turnstile || cancelled) return;
      if (!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
        setError(true);
        onError?.();
        return;
      }

      try {
        const id = window.turnstile.render(containerRef.current, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
          callback: (token: string) => {
            setVerified(true);
            onVerify(token);
          },
          'expired-callback': () => {
            setVerified(false);
            onExpire?.();
          },
          'error-callback': () => {
            setVerified(false);
            setError(true);
            onError?.();
          },
        });
        widgetIdRef.current = id;
      } catch {
        if (!cancelled) {
          setError(true);
          onError?.();
        }
      }
    };

    const tryRender = () => {
      if (window.turnstile) {
        renderWidget();
        return true;
      }
      return false;
    };

    if (!tryRender()) {
      interval = setInterval(() => {
        if (tryRender() && interval) clearInterval(interval);
      }, 200);
      timeout = setTimeout(() => {
        if (!widgetIdRef.current && !cancelled) {
          setError(true);
          onError?.();
        }
      }, 10000);
    }

    return () => {
      cancelled = true;
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = undefined;
      }
    };
  }, [onError, onExpire, onVerify]);

  if (error) {
    return (
      <p className="text-xs text-red-400">
        CAPTCHA failed to load. Please refresh and try again.
      </p>
    );
  }

  return <div ref={containerRef} className={verified ? 'hidden' : undefined} />;
}
