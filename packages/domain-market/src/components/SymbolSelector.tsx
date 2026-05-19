export function SymbolSelector({ symbol }: { symbol: string }) {
  return (
    <div className="rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-100">
      Current Symbol: {symbol}
    </div>
  );
}
