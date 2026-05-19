import { Button } from '@mini-exchange/ui';

export function SpotOrderForm() {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
      <h2 className="mb-3 font-medium text-slate-100">Spot Order Form</h2>

      <div className="space-y-3 text-sm text-slate-400">
        <div className="grid grid-cols-2 gap-2">
          <Button>Buy</Button>
          <Button>Sell</Button>
        </div>

        <div className="rounded-md border border-slate-800 px-3 py-2">
          Price input placeholder
        </div>

        <div className="rounded-md border border-slate-800 px-3 py-2">
          Quantity input placeholder
        </div>
      </div>
    </div>
  );
}
