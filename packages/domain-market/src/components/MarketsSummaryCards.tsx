import { Card } from '@mini-exchange/ui';
import { marketsLeaderboards } from '../constants/markets-mock-data';

export function MarketsSummaryCards() {
  return (
    <section className="grid gap-4 lg:grid-cols-4">
      {marketsLeaderboards.map((board) => (
        <Card
          key={board.title}
          className="border-slate-800 bg-[#10141c] px-5 py-4"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-300">
              {board.title}
            </h2>
            <a
              href={board.href}
              className="text-xs font-medium text-slate-400 hover:text-yellow-300"
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
                  className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-4 text-sm"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span
                      className={[
                        'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold',
                        item.iconClassName
                      ].join(' ')}
                    >
                      {item.symbol.slice(0, 1)}
                    </span>
                    <span className="truncate font-semibold text-slate-200">
                      {item.symbol}
                    </span>
                  </span>

                  <span className="font-medium text-slate-300">
                    {item.price}
                  </span>
                  <span
                    className={[
                      'text-right font-semibold',
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
