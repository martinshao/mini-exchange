import Link from 'next/link';
import { APP_NAME } from '@mini-exchange/config';
import { PageContainer } from '@mini-exchange/layout';
import { marketTickers, productCards } from '@/src/app-shell/navigation';

const stats = [
  {
    label: 'Architecture Packages',
    value: '15+'
  },
  {
    label: 'Mock Trading Domains',
    value: 'Spot / Futures'
  },
  {
    label: 'Data Flow',
    value: 'Mock BFF + Stream'
  }
];

const featureRows = [
  {
    title: 'Domain-first architecture',
    description:
      'Spot, futures, market, wallet, account and risk are separated into independent packages.'
  },
  {
    title: 'Mock BFF ready',
    description:
      'Pages call services and API clients instead of reading mock data directly.'
  },
  {
    title: 'Interview-oriented engineering',
    description:
      'Every module is designed to produce clear system design and engineering evidence.'
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b0e11] text-slate-100">
      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_30%),linear-gradient(180deg,#111827_0%,#0b0e11_100%)]">
        <PageContainer>
          <div className="grid min-h-[620px] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-8">
              <div className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300">
                Mini Exchange Frontend Architecture Lab
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                  Build a crypto exchange frontend like a system architect.
                </h1>

                <p className="max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
                  {APP_NAME} is a Next.js + React + TypeScript architecture lab
                  for modeling spot trading, futures trading, wallet, market
                  data, risk control, mock BFF and realtime streams.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/spot/trade/BTCUSDT"
                  className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300"
                >
                  Start Spot Trading
                </Link>

                <Link
                  href="/futures/trade/BTCUSDT"
                  className="inline-flex items-center justify-center rounded-md border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-yellow-400 hover:text-yellow-300"
                >
                  Explore Futures
                </Link>
              </div>

              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label}>
                    <div className="text-2xl font-semibold text-white">
                      {item.value}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 shadow-2xl shadow-yellow-950/20">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Market Overview</p>
                  <h2 className="text-xl font-semibold text-white">
                    Popular Markets
                  </h2>
                </div>

                <Link
                  href="/spot"
                  className="text-sm font-medium text-yellow-300 hover:text-yellow-200"
                >
                  View Markets
                </Link>
              </div>

              <div className="space-y-3">
                {marketTickers.map((item) => {
                  const isPositive = item.change.startsWith('+');

                  return (
                    <Link
                      key={item.symbol}
                      href={item.href}
                      className="grid grid-cols-[1fr_auto] gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 transition hover:border-yellow-400/60 hover:bg-slate-900"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-black">
                          {item.symbol.slice(0, 1)}
                        </div>

                        <div>
                          <div className="font-medium text-white">
                            {item.symbol}
                          </div>
                          <div className="text-xs text-slate-500">
                            {item.name}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-medium text-white">
                          {item.price}
                        </div>
                        <div
                          className={[
                            'text-xs',
                            isPositive ? 'text-emerald-400' : 'text-red-400'
                          ].join(' ')}
                        >
                          {item.change} · Vol {item.volume}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="border-b border-slate-800 py-12">
        <PageContainer>
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-wide text-yellow-300">
                Product Matrix
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white">
                Trade, manage assets and model risk in one lab.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-500">
              The homepage is designed as a professional exchange entry:
              fast product access, market preview, mock trading paths and
              architecture-oriented feature explanation.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {productCards.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-slate-800 bg-slate-950 p-5 transition hover:border-yellow-400/60 hover:bg-slate-900"
              >
                <div className="mb-5 inline-flex rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-300">
                  {item.badge}
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-5 text-sm font-medium text-yellow-300 group-hover:text-yellow-200">
                  Open →
                </div>
              </Link>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="py-12">
        <PageContainer>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
              <p className="text-sm uppercase tracking-wide text-yellow-300">
                Engineering Evidence
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-white">
                Built for architecture interviews, not just UI display.
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                The project homepage intentionally exposes the product domains:
                spot, futures, wallet, market data, risk and mock stream. This
                helps you tell a complete system-design story in interviews.
              </p>

              <div className="mt-6 flex gap-3">
                <Link
                  href="/spot/trade/BTCUSDT"
                  className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-300"
                >
                  Spot Demo
                </Link>

                <Link
                  href="/futures/trade/BTCUSDT"
                  className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-yellow-400 hover:text-yellow-300"
                >
                  Futures Demo
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {featureRows.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-5"
                >
                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-400 text-sm font-bold text-black">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>
    </main>
  );
}
