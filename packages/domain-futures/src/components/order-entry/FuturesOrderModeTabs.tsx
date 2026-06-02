import type { FuturesOrderType } from '../../types';

const orderTypes: Array<{ key: FuturesOrderType; label: string }> = [
  { key: 'limit', label: '限价' },
  { key: 'market', label: '市价' },
  { key: 'conditional', label: '条件委托' }
];

export function FuturesOrderModeTabs({
  activeType
}: {
  activeType: FuturesOrderType;
}) {
  return (
    <div className="flex gap-4 text-sm font-medium">
      {orderTypes.map((item) => (
        <button
          key={item.key}
          type="button"
          className={item.key === activeType ? 'text-yellow-300' : 'text-slate-500'}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
