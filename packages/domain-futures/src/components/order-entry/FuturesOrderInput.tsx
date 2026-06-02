export function FuturesOrderInput({
  label,
  value,
  suffix
}: {
  label: string;
  value: string;
  suffix: string;
}) {
  return (
    <label className="block rounded-md border border-slate-800 bg-[#0f131a] px-3 py-2">
      <span className="mb-2 block text-xs text-slate-500">{label}</span>
      <span className="flex items-center justify-between gap-3">
        <span className="text-base font-semibold text-slate-100">{value}</span>
        <span className="text-sm font-semibold text-slate-300">{suffix}</span>
      </span>
    </label>
  );
}
