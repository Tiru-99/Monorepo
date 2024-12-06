import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'hello there, this is a random message',
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
