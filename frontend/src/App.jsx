import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [country, setCountry] = useState("US");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPrices = async () => {
    if (!query.trim()) {
      setError("⚠️ Please enter a product name.");
      return;
    }

    setLoading(true);
    setError("");
    setResults([]);

    try {
      const { data } = await axios.get("http://localhost:5000/api/prices", {
        params: { country, query },
      });

      if (data.length === 0) {
        setError("🔍 No results found. Try a different product.");
      }

      setResults(data);
    } catch (err) {
      console.error(err);
      setError("❌ Something went wrong while fetching prices.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>📦 Product Price Comparator</h1>

      <div className="form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a product..."
        />
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="US">United States</option>
          <option value="IN">India</option>
        </select>
        <button onClick={fetchPrices}>🔍 Compare Prices</button>
      </div>

      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">{error}</div>}

      <div className="results">
        {results.map((item, idx) => (
          <div className="card" key={idx}>
            <h3>
              #{idx + 1} — {item.productName}
            </h3>
            <p>
              Price:{" "}
              <strong>
                {item.currency} {item.price}
              </strong>
            </p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              🔗 View Product
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
