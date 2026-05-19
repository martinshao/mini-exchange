export function LeverageRiskWarning({ leverage }: { leverage: number }) {
  if (leverage < 20) {
    return null;
  }

  return (
    <div className="rounded-lg border border-red-900 bg-red-950/30 p-4 text-sm text-red-200">
      High leverage warning: {leverage}x selected.
    </div>
  );
}
