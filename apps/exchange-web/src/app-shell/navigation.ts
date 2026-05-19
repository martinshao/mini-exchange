export type AppNavItem = {
  label: string;
  href: string;
  description: string;
};

export type MarketTicker = {
  symbol: string;
  name: string;
  price: string;
  change: string;
  volume: string;
  href: string;
};

export type ProductCard = {
  title: string;
  description: string;
  href: string;
  badge: string;
};

export const mainNavItems: AppNavItem[] = [
  {
    label: 'Buy Crypto',
    href: '/',
    description: 'Mock fiat and crypto entry'
  },
  {
    label: 'Markets',
    href: '/spot',
    description: 'Market overview'
  },
  {
    label: 'Trade',
    href: '/spot/trade/BTCUSDT',
    description: 'Spot trading'
  },
  {
    label: 'Futures',
    href: '/futures/trade/BTCUSDT',
    description: 'Perpetual futures trading'
  },
  {
    label: 'Wallet',
    href: '/wallet',
    description: 'Assets and balances'
  }
];

export const spotNavItems: AppNavItem[] = [
  {
    label: 'Spot Home',
    href: '/spot',
    description: 'Spot overview'
  },
  {
    label: 'BTC/USDT Trade',
    href: '/spot/trade/BTCUSDT',
    description: 'Spot trading page'
  },
  {
    label: 'Open Orders',
    href: '/spot/orders',
    description: 'Spot open orders'
  },
  {
    label: 'Order History',
    href: '/spot/history',
    description: 'Spot order history'
  }
];

export const futuresNavItems: AppNavItem[] = [
  {
    label: 'Futures Home',
    href: '/futures',
    description: 'Futures overview'
  },
  {
    label: 'BTCUSDT Perp',
    href: '/futures/trade/BTCUSDT',
    description: 'Futures trading page'
  },
  {
    label: 'Positions',
    href: '/futures/positions',
    description: 'Futures positions'
  },
  {
    label: 'Funding',
    href: '/futures/funding',
    description: 'Funding rate page'
  }
];

export const marketTickers: MarketTicker[] = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    price: '$65,000.00',
    change: '+2.15%',
    volume: '$42.8B',
    href: '/spot/trade/BTCUSDT'
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    price: '$3,420.00',
    change: '+1.48%',
    volume: '$18.3B',
    href: '/spot/trade/ETHUSDT'
  },
  {
    symbol: 'BNB',
    name: 'BNB',
    price: '$610.20',
    change: '+0.76%',
    volume: '$2.4B',
    href: '/spot'
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    price: '$154.32',
    change: '-0.84%',
    volume: '$3.1B',
    href: '/spot'
  }
];

export const productCards: ProductCard[] = [
  {
    title: 'Spot Trading',
    description: 'Buy and sell crypto assets with a simple mock order book and order form.',
    href: '/spot/trade/BTCUSDT',
    badge: 'Core'
  },
  {
    title: 'Futures Trading',
    description: 'Practice futures domain modeling with leverage, margin mode and position panels.',
    href: '/futures/trade/BTCUSDT',
    badge: 'Advanced'
  },
  {
    title: 'Wallet Overview',
    description: 'View mock spot balances, futures margin and total account equity.',
    href: '/wallet',
    badge: 'Assets'
  },
  {
    title: 'Market Stream',
    description: 'Prepare for mock ticker, order book, trade stream and mark price updates.',
    href: '/spot',
    badge: 'Realtime'
  }
];
