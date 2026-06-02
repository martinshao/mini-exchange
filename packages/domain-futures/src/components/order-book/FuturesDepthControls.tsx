export function FuturesDepthControls({ precision }: { precision: string }) {
  return (
    <div className="flex items-center gap-2 text-xs text-slate-500">
      <span className="rounded bg-red-400/20 px-1.5 py-1 text-red-300">卖</span>
      <span className="rounded bg-emerald-400/20 px-1.5 py-1 text-emerald-300">
        买
      </span>
      <button
        type="button"
        className="rounded border border-slate-700 px-2 py-1 text-slate-300"
      >
        {precision}
      </button>
    </div>
  );
}
