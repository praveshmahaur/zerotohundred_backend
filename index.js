// index.js
const express = require('express');
const app = express();
require('dotenv').config();
const { connectDB } = require('./config/db');
const meRouter = require('./routes/me');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Protected routes
app.use('/api', meRouter);

// Start server after DB connects
const PORT = process.env.PORT || 3000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to start server:', err);
    process.exit(1);
  });
