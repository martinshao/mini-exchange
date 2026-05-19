import { PageContainer, Panel } from '@mini-exchange/layout';

export default function Loading() {
  return (
    <PageContainer>
      <Panel>
        <div className="space-y-3">
          <div className="h-5 w-48 animate-pulse rounded bg-slate-800" />
          <div className="h-4 w-full animate-pulse rounded bg-slate-800" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-slate-800" />
        </div>
      </Panel>
    </PageContainer>
  );
}
