export function FuturesStatusBar() {
  return (
    <footer className="flex h-7 shrink-0 items-center justify-between border-t border-slate-800 bg-[#10141a] px-4 text-xs text-slate-500">
      <span className="text-emerald-400">系统连接稳定</span>
      <span className="hidden gap-5 md:flex">
        <span>活动中心</span>
        <span>公告通知</span>
        <span>风险揭示</span>
        <span>合约交流房</span>
      </span>
    </footer>
  );
}
