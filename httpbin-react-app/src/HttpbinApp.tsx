import { useState } from 'react';
import axios from 'axios';
import './HttpbinApp.css';

const HttpbinApp = () => {
  const [response, setResponse] = useState<string|null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleRequest = async (method : string) => {
    setLoading(true);
    setResponse(null);

    try {
      const url = `https://httpbin.org/${method === 'GET' ? 'get' : 'post'}`;
      const res = await axios({
        method,
        url,
        ...(method === 'POST' && { data: { key: 'value' } }),
      });
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='httpbin-app'>
      <h1>HTTPBin App</h1>
      <div className='buttons'>
        <button onClick={() => handleRequest('GET')}>GET Request</button>
        <button onClick={() => handleRequest('POST')}>POST Request</button>
      </div>
      {loading && <p className='loader'>Loading...</p>}
      {response && (
        <pre className='response'>
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default HttpbinApp;
