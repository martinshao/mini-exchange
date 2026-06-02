import type {
  FuturesAccountSummary,
  FuturesAssetBalance,
  FuturesBottomTab,
  FuturesChartMockState,
  FuturesInstrument,
  FuturesOpenOrder,
  FuturesOrderBook,
  FuturesOrderEntryState,
  FuturesPosition,
  FuturesTicker
} from '../types';

export const mockFuturesTickerStrip: FuturesTicker[] = [
  { symbol: 'PRLUSDT', price: '0.2048', change: '+2.97%' },
  { symbol: 'BSBUSDT', price: '0.2627', change: '-8.56%' },
  { symbol: 'EVAAUSDT', price: '0.3961', change: '-4.54%' },
  { symbol: 'BTCUSDT', price: '104,280.0', change: '-5.02%' },
  { symbol: 'ETHUSDT', price: '1,939.02', change: '-1.45%' },
  { symbol: 'RAVEUSDT', price: '0.4401', change: '-6.96%' },
  { symbol: 'STOUSDT', price: '0.2215', change: '-1.15%' },
  { symbol: 'HYPEUSDT', price: '36.72', change: '+1.49%' },
  { symbol: 'NEARUSDT', price: '2.614', change: '+9.41%' }
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
    {
      label: '资金费率 (8h)/倒计时',
      value: '0.0066% / 00:59:32',
      tone: 'warning'
    },
    { label: '24h最高价', value: '2,009.42' },
    { label: '24h最低价', value: '1,924.00' },
    { label: '24h成交量(ETH)', value: '5,354,696.381' },
    { label: '24h成交额(USDT)', value: '10,585,188,533.53' },
    { label: '合约持仓量(USDT)', value: '4,695,985,029.81' }
  ]
};

export const mockFuturesChart: FuturesChartMockState = {
  title: 'ETHUSDT 永续',
  exchange: 'Binance',
  timeframe: '1天',
  latestPrice: '1,939.02',
  open: '2,006.01',
  high: '2,006.44',
  low: '1,924.00',
  close: '1,939.02',
  change: '-66.98 (-3.34%)',
  intervals: [
    { label: '1分钟' },
    { label: '5分钟' },
    { label: '15分钟' },
    { label: '1小时' },
    { label: '4小时' },
    { label: '1天', active: true },
    { label: '1周' }
  ],
  modes: [
    { label: '基本版' },
    { label: 'Trading View', active: true },
    { label: '深度图' }
  ],
  drawingTools: [
    { label: '+' },
    { label: '线' },
    { label: '形' },
    { label: '笔' },
    { label: '文' },
    { label: '量' },
    { label: '磁' }
  ],
  indicators: [
    { label: '成交量(Volume)', value: '3.605M', tone: 'negative' },
    { label: 'MACD 12 26 close 9', value: '-9.65  -61.21  -70.86', tone: 'muted' },
    { label: 'RSI 14', value: '26.51', tone: 'muted' }
  ]
};

export const mockFuturesOrderBook: FuturesOrderBook = {
  precision: '0.1',
  lastPrice: '1,939.02',
  markPrice: '1,939.16',
  asks: [
    { price: '1,940.1', quantity: '474.88K', total: '4.12M', depthPercent: 92 },
    { price: '1,940.0', quantity: '260.46K', total: '3.64M', depthPercent: 81 },
    { price: '1,939.9', quantity: '336.20K', total: '3.38M', depthPercent: 74 },
    { price: '1,939.8', quantity: '212.75K', total: '3.04M', depthPercent: 68 },
    { price: '1,939.7', quantity: '792.70K', total: '2.83M', depthPercent: 62 },
    { price: '1,939.6', quantity: '335.19K', total: '2.04M', depthPercent: 45 },
    { price: '1,939.5', quantity: '536.42K', total: '1.70M', depthPercent: 38 },
    { price: '1,939.4', quantity: '240.22K', total: '1.17M', depthPercent: 26 }
  ],
  bids: [
    { price: '1,939.0', quantity: '72.65K', total: '72.65K', depthPercent: 22 },
    { price: '1,938.9', quantity: '14.67K', total: '87.32K', depthPercent: 28 },
    { price: '1,938.8', quantity: '39.60K', total: '126.93K', depthPercent: 34 },
    { price: '1,938.7', quantity: '303.24K', total: '430.17K', depthPercent: 48 },
    { price: '1,938.6', quantity: '364.88K', total: '795.06K', depthPercent: 56 },
    { price: '1,938.5', quantity: '257.56K', total: '1.05M', depthPercent: 64 },
    { price: '1,938.4', quantity: '464.71K', total: '1.51M', depthPercent: 76 },
    { price: '1,938.3', quantity: '729.38K', total: '2.24M', depthPercent: 88 }
  ]
};

export const mockFuturesOrderEntry: FuturesOrderEntryState = {
  marginMode: 'cross',
  leverage: 10,
  positionSide: 'long',
  orderType: 'limit',
  availableBalance: '4,761.12 USDT',
  price: '1,939.02',
  quantity: '0.00',
  quantityUnit: 'USDT',
  pricePlaceholder: '委托价格',
  quantityPlaceholder: '数量',
  reduceOnly: false,
  stopLossTakeProfit: true
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
    roe: '-64.22%',
    autoDeleverage: '!!!!',
    estimatedFundingFee: '-0.11 USDT'
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
    roe: '-73.56%',
    autoDeleverage: '!!!',
    estimatedFundingFee: '0.00 USDT'
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
    reduceOnly: false,
    status: 'open'
  }
];

export const mockFuturesAssets: FuturesAssetBalance[] = [
  {
    asset: 'USDT',
    walletBalance: '7,287.4315 USDT',
    marginBalance: '5,674.6501 USDT',
    unrealizedPnl: '-1,612.7813 USDT'
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
