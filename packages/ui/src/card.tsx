import type { HTMLAttributes } from 'react';

export function Card(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={[
        'rounded-lg border p-4',
        props.className
      ].filter(Boolean).join(' ')}
    />
  );
}
