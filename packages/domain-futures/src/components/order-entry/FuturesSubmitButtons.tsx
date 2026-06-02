export function FuturesSubmitButtons() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <button
        type="button"
        className="rounded-md bg-emerald-500 px-3 py-2 text-sm font-semibold text-white"
      >
        买入/做多
      </button>
      <button
        type="button"
        className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white"
      >
        卖出/做空
      </button>
    </div>
  );
}
