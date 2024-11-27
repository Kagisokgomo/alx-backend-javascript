const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Existing route for index page
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New route for /cart/:id
app.get('/cart/:id([0-9]+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// New route for /available_payments
app.get('/available_payments', (req, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.json(paymentMethods);
});

// New route for /login (POST)
app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Missing username');
  }
});

// Catch-all for invalid routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server on port 7865
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app; // Export the app for testing purposes
