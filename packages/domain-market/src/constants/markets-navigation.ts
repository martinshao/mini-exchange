import type { MarketsSecondaryTabKey, MarketsTabKey } from '../types/markets';

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

export const marketsSecondaryTabs: Array<{
  key: MarketsSecondaryTabKey;
  label: string;
  badge?: string;
}> = [
  {
    key: 'watchlist',
    label: '自选'
  },
  {
    key: 'coins',
    label: '币种'
  },
  {
    key: 'spot',
    label: '现货'
  },
  {
    key: 'futures',
    label: '合约'
  },
  {
    key: 'tradfi',
    label: 'TradFi',
    badge: '新上线'
  },
  {
    key: 'alpha',
    label: 'Alpha'
  },
  {
    key: 'new-listings',
    label: '新币榜'
  },
  {
    key: 'sectors',
    label: '板块'
  }
];

export const marketsCategoryTabs = [
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
