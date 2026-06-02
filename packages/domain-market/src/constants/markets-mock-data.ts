import type { MarketsLeaderboard, MarketsTableRow } from '../types/markets';

export const marketsLeaderboards: MarketsLeaderboard[] = [
  {
    title: '热门',
    href: '/markets/overview',
    items: [
      {
        symbol: 'BNB',
        name: 'BNB',
        price: '¥4.58K',
        change: '-2.37%',
        iconClassName: 'bg-yellow-400 text-black'
      },
      {
        symbol: 'BTC',
        name: 'Bitcoin',
        price: '¥468.69K',
        change: '-3.97%',
        iconClassName: 'bg-orange-400 text-white'
      },
      {
        symbol: 'ETH',
        name: 'Ethereum',
        price: '¥13.38K',
        change: '-0.19%',
        iconClassName: 'bg-indigo-400 text-white'
      }
    ]
  },
  {
    title: '新币榜',
    href: '/markets/trading_data/rankings',
    items: [
      {
        symbol: 'GENIUS',
        name: 'Genius',
        price: '¥3.02',
        change: '+2.17%',
        iconClassName: 'bg-purple-500 text-white'
      },
      {
        symbol: 'OPG',
        name: 'Open Gaming',
        price: '¥1.36',
        change: '+24.44%',
        iconClassName: 'bg-cyan-500 text-white'
      },
      {
        symbol: 'AIGENSYN',
        name: 'AiGenSyn',
        price: '¥0.2019212',
        change: '+0.10%',
        iconClassName: 'bg-black text-white'
      }
    ]
  },
  {
    title: '领涨榜',
    href: '/markets/trading_data/rankings',
    items: [
      {
        symbol: 'EPIC',
        name: 'Epic Chain',
        price: '¥2.94',
        change: '+34.26%',
        iconClassName: 'bg-zinc-950 text-white'
      },
      {
        symbol: 'OPG',
        name: 'Open Gaming',
        price: '¥1.36',
        change: '+24.44%',
        iconClassName: 'bg-cyan-500 text-white'
      },
      {
        symbol: 'RIF',
        name: 'Rootstock',
        price: '¥0.570544',
        change: '+23.94%',
        iconClassName: 'bg-indigo-500 text-white'
      }
    ]
  },
  {
    title: '成交榜',
    href: '/markets/trading_data',
    items: [
      {
        symbol: 'BTC',
        name: 'Bitcoin',
        price: '¥468.69K',
        change: '-3.97%',
        iconClassName: 'bg-orange-400 text-white'
      },
      {
        symbol: 'ETH',
        name: 'Ethereum',
        price: '¥13.38K',
        change: '-0.19%',
        iconClassName: 'bg-indigo-400 text-white'
      },
      {
        symbol: 'SOL',
        name: 'Solana',
        price: '¥532.96',
        change: '-2.43%',
        iconClassName: 'bg-teal-500 text-white'
      }
    ]
  }
];

export const marketsTableRows: MarketsTableRow[] = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    price: '69,333.11',
    fiatPrice: '¥468,691.82',
    change: '-3.97%',
    volume: '¥311.25B',
    marketCap: '¥9.40T',
    iconClassName: 'bg-orange-400 text-white'
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    price: '1,979.35',
    fiatPrice: '¥13,380.41',
    change: '-0.19%',
    volume: '¥123.30B',
    marketCap: '¥1.61T',
    iconClassName: 'bg-indigo-400 text-white'
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    price: '78.76',
    fiatPrice: '¥532.96',
    change: '-2.43%',
    volume: '¥21.48B',
    marketCap: '¥275.20B',
    iconClassName: 'bg-teal-500 text-white'
  }
];
