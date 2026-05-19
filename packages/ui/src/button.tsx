import type { ButtonHTMLAttributes } from 'react';

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={[
        'rounded-md border px-3 py-2 text-sm',
        props.className
      ].filter(Boolean).join(' ')}
    />
  );
}
