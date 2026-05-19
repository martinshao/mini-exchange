import type { ApiResponse } from '@mini-exchange/trading-types';

async function request<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {})
    }
  });

  const result = (await response.json()) as ApiResponse<T>;

  if (!response.ok || result.code !== 0) {
    throw new Error(result.message || 'Request failed');
  }

  return result.data;
}

export const httpClient = {
  get<T>(url: string) {
    return request<T>(url);
  },

  post<T>(url: string, body?: unknown) {
    return request<T>(url, {
      method: 'POST',
      body: JSON.stringify(body ?? {})
    });
  }
};
