'use client';

import { useEffect } from 'react';

declare global {
  interface Window { __cf_token?: string }
}

export function SessionTokenBridge({ token }: { token: string }) {
  useEffect(() => {
    window.__cf_token = token;
  }, [token]);

  return null;
}
