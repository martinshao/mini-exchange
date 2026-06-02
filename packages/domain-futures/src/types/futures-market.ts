export type FuturesTicker = {
  symbol: string;
  change: string;
};

export type FuturesInstrumentStat = {
  label: string;
  value: string;
};

export type FuturesInstrument = {
  symbol: string;
  contractType: string;
  lastPrice: string;
  priceChange: string;
  priceChangePercent: string;
  stats: FuturesInstrumentStat[];
};

export type FuturesOrderBookLevel = {
  price: string;
  quantity: string;
  total: string;
};

export type FuturesOrderBook = {
  precision: string;
  asks: FuturesOrderBookLevel[];
  bids: FuturesOrderBookLevel[];
};
