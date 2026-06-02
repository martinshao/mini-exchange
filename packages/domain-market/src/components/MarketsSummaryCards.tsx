import { Card } from '@mini-exchange/ui';
import { marketsLeaderboards } from '../constants/markets-mock-data';

export function MarketsSummaryCards() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {marketsLeaderboards.map((board) => (
        <Card
          key={board.title}
          className="min-h-[176px] rounded-[22px] border-[#2a313d] bg-[#11151b] px-7 py-6"
        >
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-base font-semibold text-slate-200">
              {board.title}
            </h2>
            <a
              href={board.href}
              className="text-base font-semibold text-slate-300 transition hover:text-yellow-300"
            >
              更多 &gt;
            </a>
          </div>

          <div className="space-y-4">
            {board.items.map((item) => {
              const isPositive = item.change.startsWith('+');

              return (
                <a
                  key={`${board.title}-${item.symbol}`}
                  href="/spot/trade/BTCUSDT"
                  className="grid grid-cols-[minmax(0,1fr)_minmax(86px,auto)_minmax(76px,auto)] items-center gap-4 text-base"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span
                      className={[
                        'flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold',
                        item.iconClassName
                      ].join(' ')}
                    >
                      {item.symbol.slice(0, 1)}
                    </span>
                    <span className="truncate text-lg font-semibold text-slate-200">
                      {item.symbol}
                    </span>
                  </span>

                  <span className="whitespace-nowrap text-lg font-medium text-slate-200">
                    {item.price}
                  </span>
                  <span
                    className={[
                      'whitespace-nowrap text-right text-lg font-semibold',
                      isPositive ? 'text-emerald-400' : 'text-red-400'
                    ].join(' ')}
                  >
                    {item.change}
                  </span>
                </a>
              );
            })}
          </div>
        </Card>
      ))}
    </section>
  );
}
