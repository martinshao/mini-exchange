import type { FuturesMarginMode, FuturesPositionSide } from './futures-orders';

export type FuturesAccountSummary = {
  marginRatio: string;
  maintenanceMargin: string;
  marginBalance: string;
  walletBalance: string;
  unrealizedPnl: string;
};

export type FuturesPosition = {
  symbol: string;
  side: FuturesPositionSide;
  marginMode: FuturesMarginMode;
  leverage: number;
  entryPrice: string;
  markPrice: string;
  liquidationPrice: string;
  marginRatio: string;
  margin: string;
  pnl: string;
  roe: string;
  autoDeleverage: string;
  estimatedFundingFee: string;
};

export type FuturesAssetBalance = {
  asset: string;
  walletBalance: string;
  marginBalance: string;
  unrealizedPnl: string;
};

export type FuturesBottomTab = {
  key: string;
  label: string;
  count?: number;
};
