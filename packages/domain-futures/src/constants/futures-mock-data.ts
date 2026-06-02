import type {
  FuturesAccountSummary,
  FuturesBottomTab,
  FuturesInstrument,
  FuturesOpenOrder,
  FuturesOrderBook,
  FuturesOrderEntryState,
  FuturesPosition,
  FuturesTicker
} from '../types';

export const mockFuturesTickerStrip: FuturesTicker[] = [
  { symbol: 'PRLUSDT', change: '+2.97%' },
  { symbol: 'BSBUSDT', change: '-8.56%' },
  { symbol: 'EVAAUSDT', change: '-4.54%' },
  { symbol: 'BTCUSDT', change: '-5.02%' },
  { symbol: 'ETHUSDT', change: '-1.45%' },
  { symbol: 'RAVEUSDT', change: '-6.96%' },
  { symbol: 'STOUSDT', change: '-1.15%' },
  { symbol: 'HYPEUSDT', change: '+1.49%' },
  { symbol: 'NEARUSDT', change: '+9.41%' }
];

export const mockFuturesInstrument: FuturesInstrument = {
  symbol: 'ETHUSDT',
  contractType: '永续',
  lastPrice: '1,939.02',
  priceChange: '-28.58',
  priceChangePercent: '-1.45%',
  stats: [
    { label: '标记价格', value: '1,939.16' },
    { label: '指数价格', value: '1,940.15' },
    { label: '资金费率 (8h)/倒计时', value: '0.0066% / 00:59:32' },
    { label: '24h最高价', value: '2,009.42' },
    { label: '24h最低价', value: '1,924.00' },
    { label: '24h成交量(ETH)', value: '5,354,696.381' },
    { label: '24h成交额(USDT)', value: '10,585,188,533.53' },
    { label: '合约持仓量(USDT)', value: '4,695,985,029.81' }
  ]
};

export const mockFuturesOrderBook: FuturesOrderBook = {
  precision: '0.1',
  asks: [
    { price: '1,940.1', quantity: '474.88K', total: '4.12M' },
    { price: '1,940.0', quantity: '260.46K', total: '3.64M' },
    { price: '1,939.9', quantity: '336.20K', total: '3.38M' },
    { price: '1,939.8', quantity: '212.75K', total: '3.04M' }
  ],
  bids: [
    { price: '1,939.0', quantity: '72.65K', total: '72.65K' },
    { price: '1,938.9', quantity: '14.67K', total: '87.32K' },
    { price: '1,938.8', quantity: '39.60K', total: '126.93K' },
    { price: '1,938.7', quantity: '303.24K', total: '430.17K' }
  ]
};

export const mockFuturesOrderEntry: FuturesOrderEntryState = {
  marginMode: 'cross',
  leverage: 10,
  positionSide: 'long',
  orderType: 'limit',
  availableBalance: '4,761.12 USDT',
  pricePlaceholder: '委托价格',
  quantityPlaceholder: '数量'
};

export const mockFuturesAccountSummary: FuturesAccountSummary = {
  marginRatio: '6.07%',
  maintenanceMargin: '344.3444 USDT',
  marginBalance: '5,674.6501 USDT',
  walletBalance: '7,287.4315 USDT',
  unrealizedPnl: '-1,612.7813 USDT'
};

export const mockFuturesPositions: FuturesPosition[] = [
  {
    symbol: 'PRLUSDT',
    side: 'long',
    marginMode: 'cross',
    leverage: 10,
    entryPrice: '0.218000',
    markPrice: '0.204000',
    liquidationPrice: '--',
    marginRatio: '6.07%',
    margin: '187.14 USDT',
    pnl: '-128.43 USDT',
    roe: '-64.22%'
  },
  {
    symbol: 'FOLKSUSDT',
    side: 'long',
    marginMode: 'cross',
    leverage: 10,
    entryPrice: '1.468000',
    markPrice: '1.358000',
    liquidationPrice: '--',
    marginRatio: '6.07%',
    margin: '18.49 USDT',
    pnl: '-14.70 USDT',
    roe: '-73.56%'
  }
];

export const mockFuturesOpenOrders: FuturesOpenOrder[] = [
  {
    symbol: 'ETHUSDT',
    side: 'long',
    orderType: 'limit',
    price: '1,920.00',
    quantity: '0.50 ETH',
    filled: '0%',
    status: 'open'
  }
];

export const mockFuturesBottomTabs: FuturesBottomTab[] = [
  { key: 'positions', label: '仓位', count: mockFuturesPositions.length },
  { key: 'open-orders', label: '当前委托', count: mockFuturesOpenOrders.length },
  { key: 'order-history', label: '历史委托' },
  { key: 'trade-history', label: '历史成交' },
  { key: 'funding-history', label: '资金流水' },
  { key: 'position-history', label: '仓位历史记录' },
  { key: 'bots', label: '机器人' },
  { key: 'assets', label: '资产' }
];
