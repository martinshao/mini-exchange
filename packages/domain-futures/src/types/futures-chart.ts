export type FuturesChartInterval = {
  label: string;
  active?: boolean;
};

export type FuturesChartMode = {
  label: string;
  active?: boolean;
};

export type FuturesChartTool = {
  label: string;
};

export type FuturesChartIndicator = {
  label: string;
  value: string;
  tone?: 'default' | 'positive' | 'negative' | 'muted';
};

export type FuturesChartMockState = {
  title: string;
  exchange: string;
  timeframe: string;
  latestPrice: string;
  open: string;
  high: string;
  low: string;
  close: string;
  change: string;
  intervals: FuturesChartInterval[];
  modes: FuturesChartMode[];
  drawingTools: FuturesChartTool[];
  indicators: FuturesChartIndicator[];
};
