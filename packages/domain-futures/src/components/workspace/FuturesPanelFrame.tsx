import type { ReactNode } from 'react';

export function FuturesPanelFrame({
  title,
  actions,
  children,
  className
}: {
  title?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={[
        'flex min-h-0 flex-col overflow-hidden rounded-lg border border-slate-800 bg-[#11151b]',
        className
      ].filter(Boolean).join(' ')}
    >
      {title || actions ? (
        <div className="flex min-h-10 items-center justify-between border-b border-slate-800 px-4">
          {title ? (
            <h2 className="text-sm font-semibold text-slate-200">{title}</h2>
          ) : (
            <span />
          )}
          {actions}
        </div>
      ) : null}

      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
    </section>
  );
}
