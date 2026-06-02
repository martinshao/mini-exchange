import {
  marketsCategoryTabs,
  marketsSecondaryTabs
} from '../constants/markets-navigation';
import type { MarketsSecondaryTabKey } from '../types/markets';

export function MarketsCategoryTabs({
  activeKey = 'coins'
}: {
  activeKey?: MarketsSecondaryTabKey;
}) {
  return (
    <div className="space-y-6">
      <nav className="flex gap-6 overflow-x-auto">
        {marketsSecondaryTabs.map((item) => {
          const isActive = item.key === activeKey;

          return (
            <button
              key={item.key}
              type="button"
              className={[
                'relative shrink-0 pb-2 text-base font-semibold transition',
                isActive
                  ? 'text-slate-100 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-yellow-400'
                  : 'text-slate-500 hover:text-slate-200'
              ].join(' ')}
            >
              {item.badge ? (
                <span className="absolute -top-4 left-1/2 rounded-sm bg-yellow-400 px-1.5 py-0.5 text-[10px] font-semibold leading-none text-black">
                  {item.badge}
                </span>
              ) : null}
              {item.label}
            </button>
          );
        })}
      </nav>

      <nav className="flex items-center gap-5 overflow-x-auto">
        {marketsCategoryTabs.map((item, index) => (
          <button
            key={item}
            type="button"
            className={[
              'shrink-0 rounded-md px-3 py-2 text-sm font-medium transition',
              index === 0
                ? 'bg-slate-800 text-slate-100'
                : 'text-slate-500 hover:bg-slate-900 hover:text-slate-200'
            ].join(' ')}
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
}
