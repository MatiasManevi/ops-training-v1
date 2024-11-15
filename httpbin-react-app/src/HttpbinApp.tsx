import { useState } from 'react';
import axios from 'axios';
import './HttpbinApp.css';

enum HttpMethod {
  POST = 'post',
  GET = 'get',
}

const HttpbinApp = () => {
  const [response, setResponse] = useState<string|null>(null);
  const [loading, setLoading] = useState<boolean>(false);

const handleRequest = async (method: HttpMethod) => {
  setLoading(true);
  setResponse(null);

  const baseUrl = process.env.REACT_APP_HTTPBIN_URL || 'http://localhost:9090';

  try {
    const url = `${baseUrl}/${method}`;
    const res = await axios({
      method,
      url,
      ...(method === HttpMethod.POST && { data: { key: 'value' } }),
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
        <button onClick={() => handleRequest(HttpMethod.GET)}>GET Request</button>
        <button onClick={() => handleRequest(HttpMethod.POST)}>POST Request</button>
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
