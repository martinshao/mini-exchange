import {
  createPageMetadata,
  formatTradingSymbol
} from '@/app/seo';
import { SpotTradePage } from '@mini-exchange/domain-spot';

export async function generateMetadata({
  params
}: {
  params: Promise<{ symbol: string }>;
}) {
  const { symbol } = await params;
  const formattedSymbol = formatTradingSymbol(symbol);

  return createPageMetadata({
    title: `${formattedSymbol} Spot Trading`,
    description: `Trade ${formattedSymbol} in the Mini Exchange spot trading workspace with mock order book, recent trades and order entry flows.`,
    path: `/spot/trade/${symbol.toUpperCase()}`
  });
}

export default async function Page({
  params
}: {
  params: Promise<{ symbol: string }>;
}) {
  const { symbol } = await params;

  return <SpotTradePage symbol={symbol} />;
}
