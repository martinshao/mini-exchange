import { AssetOverview } from '../components/AssetOverview';
import { FuturesMarginTable } from '../components/FuturesMarginTable';
import { SpotBalanceTable } from '../components/SpotBalanceTable';

export function WalletPage() {
  return (
    <div className="space-y-4">
      <AssetOverview />

      <div className="grid gap-4 md:grid-cols-2">
        <SpotBalanceTable />
        <FuturesMarginTable />
      </div>
    </div>
  );
}
