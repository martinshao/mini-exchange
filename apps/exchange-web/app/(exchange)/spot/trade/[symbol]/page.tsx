import { SpotTradePage } from '@mini-exchange/domain-spot';

export default async function Page({
  params
}: {
  params: Promise<{ symbol: string }>;
}) {
  const { symbol } = await params;

  return <SpotTradePage symbol={symbol} />;
}
