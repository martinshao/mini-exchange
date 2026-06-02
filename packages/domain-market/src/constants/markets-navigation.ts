import type { MarketsAssetTabKey, MarketsTabKey } from '../types/markets';

export const marketsTabs: Array<{
  key: MarketsTabKey;
  label: string;
  href: string;
}> = [
  {
    key: 'overview',
    label: '总览',
    href: '/markets/overview'
  },
  {
    key: 'trading-data',
    label: '交易数据',
    href: '/markets/trading_data'
  },
  {
    key: 'ai-select',
    label: 'AI 精选',
    href: '/markets/ai-select'
  },
  {
    key: 'token-unlock',
    label: '代币解锁',
    href: '/markets/token-unlock'
  }
];

export const marketsAssetTabs: Array<{
  key: MarketsAssetTabKey;
  label: string;
  href: string;
  badge?: string;
}> = [
  {
    key: 'watchlist',
    label: '自选',
    href: '/markets/favorite-all'
  },
  {
    key: 'coins',
    label: '币种',
    href: '/markets/overview'
  },
  {
    key: 'spot',
    label: '现货',
    href: '/markets/spot_margin-USDT'
  },
  {
    key: 'futures',
    label: '合约',
    href: '/markets/futures-perpetual'
  },
  {
    key: 'tradfi',
    label: 'TradFi',
    href: '/markets/tradfi-Futures',
    badge: '新上线'
  },
  {
    key: 'alpha',
    label: 'Alpha',
    href: '/markets/alpha-all'
  },
  {
    key: 'new-listings',
    label: '新币榜',
    href: '/markets/newListing'
  },
  {
    key: 'sectors',
    label: '板块',
    href: '/markets/zones'
  }
];

export const marketsAssetCategoryTabs = [
  '全部',
  'BNB Chain',
  'Solana',
  'RWA',
  'MEME',
  '支付',
  'AI',
  '一层/二层网络',
  '种子',
  'Launchpool',
  'Megadrop',
  '游戏',
  'DeFi',
  '观察'
];
