'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

export function TurnstileWidget({ onVerify }: { onVerify: (token: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | undefined>(undefined);
  const [error, setError] = useState(false);

  useEffect(() => {
    const renderWidget = () => {
      if (!containerRef.current || !window.turnstile) return;
      try {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
          callback: (token: string) => onVerify(token),
          'error-callback': () => setError(true),
        });
      } catch {
        setError(true);
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
      const interval = setInterval(() => {
        if (tryRender()) clearInterval(interval);
      }, 100);
      return () => clearInterval(interval);
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, [onVerify]);

  if (error) {
    return (
      <p className="text-xs text-red-400">
        CAPTCHA failed to load. Please refresh and try again.
      </p>
    );
  }

  return <div ref={containerRef} />;
}
