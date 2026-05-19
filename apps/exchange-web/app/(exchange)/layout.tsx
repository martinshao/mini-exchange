import Link from 'next/link';
import { APP_NAME } from '@mini-exchange/config';
import { PageContainer } from '@mini-exchange/layout';
import { UserMenu } from '@mini-exchange/domain-account';
import { mainNavItems } from '@/src/app-shell/navigation';

export default function ExchangeLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0b0e11] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#0b0e11]/95 backdrop-blur">
        <PageContainer>
          <div className="flex items-center justify-between gap-6 py-3">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-sm font-black text-black">
                  MX
                </span>
                <span className="hidden text-sm font-semibold text-slate-100 md:inline">
                  {APP_NAME}
                </span>
              </Link>

              <nav className="hidden items-center gap-1 lg:flex">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-yellow-300"
                  >
                    {item.label}
                  </Link>
                ))}

                <button className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-yellow-300">
                  More
                </button>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/wallet"
                className="hidden rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white md:inline-flex"
              >
                Deposit
              </Link>

              <Link
                href="/spot/trade/BTCUSDT"
                className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-300"
              >
                Trade Now
              </Link>

              <div className="hidden md:block">
                <UserMenu />
              </div>
            </div>
          </div>
        </PageContainer>
      </header>

      <main>{children}</main>
    </div>
  );
}
