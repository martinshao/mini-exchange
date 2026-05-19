import Link from 'next/link';
import { PageContainer, Panel } from '@mini-exchange/layout';
import { Button } from '@mini-exchange/ui';

export default function NotFound() {
  return (
    <PageContainer>
      <Panel>
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">Page Not Found</h1>
          <p className="text-sm text-slate-500">
            The route you are looking for does not exist.
          </p>
          <Link href="/">
            <Button>Back Home</Button>
          </Link>
        </div>
      </Panel>
    </PageContainer>
  );
}
