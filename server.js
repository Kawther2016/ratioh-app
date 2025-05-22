const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, message } = req.body;
  console.log('Received message from', name + ':', message);
  res.json({ message: 'Thanks for contacting us, ' + name + '!' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
