import type { ReactNode } from 'react';
import { Card } from '@mini-exchange/ui';

export function Panel({ children }: { children: ReactNode }) {
  return <Card>{children}</Card>;
}
