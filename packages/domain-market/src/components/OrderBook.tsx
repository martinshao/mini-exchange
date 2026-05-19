const asks = [
  ['65080.00', '0.241'],
  ['65050.00', '0.532'],
  ['65020.00', '0.104']
];

const bids = [
  ['64980.00', '0.334'],
  ['64950.00', '0.890'],
  ['64920.00', '0.216']
];

export function OrderBook() {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
      <h2 className="mb-3 font-medium text-slate-100">OrderBook</h2>

      <div className="space-y-1 text-xs">
        {asks.map(([price, qty]) => (
          <div key={price} className="flex justify-between text-red-400">
            <span>{price}</span>
            <span>{qty}</span>
          </div>
        ))}

        <div className="my-2 border-t border-slate-800" />

        {bids.map(([price, qty]) => (
          <div key={price} className="flex justify-between text-emerald-400">
            <span>{price}</span>
            <span>{qty}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
