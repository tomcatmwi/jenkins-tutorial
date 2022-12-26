import './App.css';
import { useState, useEffect } from 'react';

const backendUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:4444' : '';

function App() {

  const [message, setMessage] = useState('Loading...');

  useEffect(() => {

    fetch(`${backendUrl}/helloworld`, {
      method: 'get',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async response => {
        if (!response.ok)
          throw new Error('Invalid response!');
        const data = await response.json();
        setMessage(data.message || '???');
      })
      .catch(err => setMessage(`Unable to access ${backendUrl}: ${err.message}`));    

  }, [])

  return (
    <div className="App">
      <h3>And now, a message from our backend...</h3>

      <pre>{message}</pre>

    </div>
  );
}

export default App;
