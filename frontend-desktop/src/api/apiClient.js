const API_URL = process.env.REACT_APP_API_URL;

export async function apiClient(
  path,
  { method = 'GET', body, headers = {} } = {}
) {
  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || 'API error');
  }

  return res.json();
}