const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
const indexRoute = require('./routes/index.js');
app.use("/", indexRoute);

// Listen on the port Render provides, or default to 10000 locally
const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
