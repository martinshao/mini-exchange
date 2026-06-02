import { marketsTableRows } from '../constants/markets-mock-data';

export function MarketsTablePlaceholder({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-xl font-semibold text-slate-100">{title}</h1>
        <p className="max-w-5xl text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead className="text-xs text-slate-500">
            <tr>
              <th className="py-3 font-medium">名称</th>
              <th className="py-3 text-right font-medium">价格</th>
              <th className="py-3 text-right font-medium">涨跌</th>
              <th className="py-3 text-right font-medium">24h成交量</th>
              <th className="py-3 text-right font-medium">市值</th>
              <th className="py-3 text-right font-medium">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-900">
            {marketsTableRows.map((row) => {
              const isPositive = row.change.startsWith('+');

              return (
                <tr key={row.symbol} className="text-slate-200">
                  <td className="py-5">
                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        className={[
                          'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold',
                          row.iconClassName
                        ].join(' ')}
                      >
                        {row.symbol.slice(0, 1)}
                      </span>
                      <span className="font-semibold">{row.symbol}</span>
                      <span className="text-slate-500">{row.name}</span>
                    </div>
                  </td>
                  <td className="py-5 text-right">
                    <div className="font-medium">{row.price}</div>
                    <div className="text-xs text-slate-500">{row.fiatPrice}</div>
                  </td>
                  <td
                    className={[
                      'py-5 text-right font-semibold',
                      isPositive ? 'text-emerald-400' : 'text-red-400'
                    ].join(' ')}
                  >
                    {row.change}
                  </td>
                  <td className="py-5 text-right font-medium">{row.volume}</td>
                  <td className="py-5 text-right font-medium">
                    {row.marketCap}
                  </td>
                  <td className="py-5 text-right text-slate-400">
                    <span className="inline-flex gap-3">
                      <a href="/spot/trade/BTCUSDT" className="hover:text-white">
                        图表
                      </a>
                      <a href="/spot/trade/BTCUSDT" className="hover:text-white">
                        交易
                      </a>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
