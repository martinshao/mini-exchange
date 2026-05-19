'use client';

import { useEffect } from 'react';
import { Button } from '@mini-exchange/ui';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="rounded-lg border border-red-900 bg-red-950/40 p-6">
      <h2 className="text-lg font-semibold text-red-200">
        Something went wrong in exchange routes.
      </h2>

      <p className="mt-2 text-sm text-red-300">{error.message}</p>

      <div className="mt-4">
        <Button onClick={reset}>Try again</Button>
      </div>
    </div>
  );
}
