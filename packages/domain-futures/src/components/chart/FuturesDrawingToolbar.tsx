import type { FuturesChartTool } from '../../types';

export function FuturesDrawingToolbar({ tools }: { tools: FuturesChartTool[] }) {
  return (
    <aside className="flex w-12 shrink-0 flex-col items-center gap-3 border-r border-slate-800 bg-[#10141a] py-3 text-xs text-slate-400">
      {tools.map((tool) => (
        <button
          key={tool.label}
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded border border-transparent hover:border-slate-700 hover:text-slate-100"
        >
          {tool.label}
        </button>
      ))}
    </aside>
  );
}
