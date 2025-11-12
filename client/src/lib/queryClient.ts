import { QueryClient } from "@tanstack/react-query";

async function handleResponse(response: Response) {
  if (!response.ok) {
    const error = await response.text().catch(() => "Network error");
    throw new Error(error || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function apiRequest(url: string, options?: RequestInit) {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
  return handleResponse(response);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const response = await fetch(queryKey[0] as string);
        return handleResponse(response);
      },
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});
