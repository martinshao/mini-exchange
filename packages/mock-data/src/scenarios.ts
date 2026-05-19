export type MockScenario =
  | 'normal'
  | 'empty'
  | 'error'
  | 'volatile-market'
  | 'restricted-user';

export const DEFAULT_SCENARIO: MockScenario = 'normal';
