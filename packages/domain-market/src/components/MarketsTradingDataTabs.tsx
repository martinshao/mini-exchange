const tradingDataTabs = [
  {
    label: '排行榜',
    href: '/markets/trading_data/rankings'
  },
  {
    label: 'U本位合约',
    href: '/markets/trading_data/futures/perpetual/trading-data'
  },
  {
    label: '币本位合约',
    href: '/markets/trading_data/futures/quarterly/trading-data'
  },
  {
    label: '期权',
    href: '/markets/trading_data'
  }
];

export function MarketsTradingDataTabs({
  activeHref
}: {
  activeHref: string;
}) {
  return (
    <nav className="flex gap-8 overflow-x-auto">
      {tradingDataTabs.map((item) => {
        const isActive = item.href === activeHref;

        return (
          <a
            key={item.href}
            href={item.href}
            className={[
              'relative shrink-0 pb-2 text-base font-semibold transition',
              isActive
                ? 'text-slate-100 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-yellow-400'
                : 'text-slate-500 hover:text-slate-200'
            ].join(' ')}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
