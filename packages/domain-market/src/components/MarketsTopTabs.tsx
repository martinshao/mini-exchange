import { marketsTabs } from '../constants/markets-navigation';
import type { MarketsTabKey } from '../types/markets';

export function MarketsTopTabs({ activeKey }: { activeKey: MarketsTabKey }) {
  return (
    <nav className="flex gap-8 overflow-x-auto">
      {marketsTabs.map((item) => {
        const isActive = item.key === activeKey;

        return (
          <a
            key={item.key}
            href={item.href}
            className={[
              'shrink-0 py-2 text-lg font-semibold transition',
              isActive
                ? 'text-slate-100'
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
