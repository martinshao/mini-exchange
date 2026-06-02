export type MarketsTabKey =
  | 'overview'
  | 'trading-data'
  | 'ai-select'
  | 'token-unlock';

export type MarketsAssetTabKey =
  | 'watchlist'
  | 'coins'
  | 'spot'
  | 'futures'
  | 'tradfi'
  | 'alpha'
  | 'new-listings'
  | 'sectors';

export type MarketsLeaderboardItem = {
  symbol: string;
  name: string;
  price: string;
  change: string;
  iconClassName: string;
};

export type MarketsLeaderboard = {
  title: string;
  href: string;
  items: MarketsLeaderboardItem[];
};

export type MarketsTableRow = {
  symbol: string;
  name: string;
  price: string;
  fiatPrice: string;
  change: string;
  volume: string;
  marketCap: string;
  iconClassName: string;
};
