import {
  createPageMetadata,
  formatTradingSymbol
} from '@/app/seo';
import { FuturesTradePage } from '@mini-exchange/domain-futures';

export async function generateMetadata({
  params
}: {
  params: Promise<{ symbol: string }>;
}) {
  const { symbol } = await params;
  const formattedSymbol = formatTradingSymbol(symbol);

  return createPageMetadata({
    title: `${formattedSymbol} Perpetual Futures Trading`,
    description: `Trade ${formattedSymbol} perpetual futures in the Mini Exchange workspace with leverage controls, positions, funding and risk panels.`,
    path: `/futures/trade/${symbol.toUpperCase()}`
  });
}

export default async function Page({
  params
}: {
  params: Promise<{ symbol: string }>;
}) {
  const { symbol } = await params;

  return <FuturesTradePage symbol={symbol} />;
}
