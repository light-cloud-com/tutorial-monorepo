import { useEffect, useState } from "react";
import { PRODUCT, formatVersion } from "@tutorial/shared";
import "./App.css";

// The address of the api app. Set per environment in Light Cloud as VITE_API_URL;
// Vite reads it at build time.
const API_URL = import.meta.env.VITE_API_URL;

export default function App() {
  const [answer, setAnswer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!API_URL) {
      setError("VITE_API_URL is not set");
      return;
    }
    fetch(API_URL)
      .then((response) => response.json())
      .then(setAnswer)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main>
      <p className="label">apps/web</p>
      <h1>{PRODUCT}</h1>
      <p>This page is the web app, {formatVersion(2)}.</p>
      <h2>The api app answered</h2>
      {answer && <pre>{JSON.stringify(answer, null, 2)}</pre>}
      {error && <p className="error">Could not reach the api: {error}</p>}
      {!answer && !error && <p>Asking the api...</p>}
    </main>
  );
}
