export type FuturesMarginMode = 'cross' | 'isolated';

export type FuturesPositionSide = 'long' | 'short';

export type FuturesOrderType = 'limit' | 'market' | 'conditional';

export type FuturesOrderEntryState = {
  marginMode: FuturesMarginMode;
  leverage: number;
  positionSide: FuturesPositionSide;
  orderType: FuturesOrderType;
  availableBalance: string;
  price: string;
  quantity: string;
  quantityUnit: string;
  pricePlaceholder: string;
  quantityPlaceholder: string;
  reduceOnly: boolean;
  stopLossTakeProfit: boolean;
};

export type FuturesOpenOrder = {
  symbol: string;
  side: FuturesPositionSide;
  orderType: FuturesOrderType;
  price: string;
  quantity: string;
  filled: string;
  reduceOnly: boolean;
  status: string;
};
