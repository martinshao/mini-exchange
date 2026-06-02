export function FuturesDockEmptyState({ label }: { label: string }) {
  return (
    <div className="grid h-full place-items-center text-sm text-slate-500">
      {label}暂无 mock 数据
    </div>
  );
}
