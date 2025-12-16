const API_URL = process.env.REACT_APP_API_URL;

export async function fetchHello() {
  const res = await fetch(`${API_URL}/hello`);
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}
