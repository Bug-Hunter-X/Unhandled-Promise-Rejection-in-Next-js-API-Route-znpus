```javascript
// pages/api/dataSolution.js
export default async function handler(req, res) {
  try {
    const data = await fetchData();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

async function fetchData() {
  // Simulate an asynchronous operation that might fail
  await new Promise(resolve => setTimeout(resolve, 1000));
  throw new Error('Simulated database error');
}
```