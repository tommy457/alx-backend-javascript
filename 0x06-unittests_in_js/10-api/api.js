const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id) || !Number.isInteger(id)) {
    res.status(400).send('Error');
  }

  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  res.set('Content-Type', 'application/json');
  const payload = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.send(payload);
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (userName) {
	  res.send(`Welcome ${userName}`);
  } else {
	  res.status(404).send();
  }
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
