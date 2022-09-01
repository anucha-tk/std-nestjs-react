import { useEffect, useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const URL = import.meta.env.VITE_APP_BASE_URL;
  const [posts, setPosts] = useState<{ title: string; body: string }[]>([]);

  const fetch = useCallback(async () => {
    const { data } = await axios.get<{ title: string; body: string }[]>(URL);
    setPosts(data);
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        {posts.map((e) => (
          <ul>
            <li>e.title: {e.title}</li>
            <li>e.body: {e.body}</li>
          </ul>
        ))}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
