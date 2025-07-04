import express from 'express';
import cors from 'cors';
import { dummyProducts } from './data/dummyProducts.js';

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/prices', (req, res) => {
  const { query, country } = req.query;
  console.log(`Received request for: ${query} in ${country}`);

  const filteredResults = dummyProducts
    .filter(product =>
      product.productName.toLowerCase().includes(query.toLowerCase()) &&
      product.country === country
    )
    .sort((a, b) => parseFloat(a.price) - parseFloat(b.price)); // ascending price sort

  res.json(filteredResults);
});

app.listen(PORT, () => console.log(`✅ API running at http://localhost:${PORT}`));
