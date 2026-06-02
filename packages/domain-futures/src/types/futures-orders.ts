export type FuturesMarginMode = 'cross' | 'isolated';

export type FuturesPositionSide = 'long' | 'short';

export type FuturesOrderType = 'limit' | 'market' | 'conditional';

export type FuturesOrderEntryState = {
  marginMode: FuturesMarginMode;
  leverage: number;
  positionSide: FuturesPositionSide;
  orderType: FuturesOrderType;
  availableBalance: string;
  pricePlaceholder: string;
  quantityPlaceholder: string;
};

export type FuturesOpenOrder = {
  symbol: string;
  side: FuturesPositionSide;
  orderType: FuturesOrderType;
  price: string;
  quantity: string;
  filled: string;
  status: string;
};
