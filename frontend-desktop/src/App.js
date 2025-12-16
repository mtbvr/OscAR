import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/hello`) //https://oscbackend-production.up.railway.app
      .then(res => res.json())
      .then(data => setMessage(data.message, "coucou"))
      .catch(err => setMessage('Error: ' + err.message));
  }, []);

  return (
    <div>
      <h1>Stellaris la doui</h1>
      <p>{message}</p>
    </div>
  );
}
