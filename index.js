const express = require('express');
const app = express();
const port = 8080;

// Get the version from package.json
const { version } = require('./package.json');

app.get('/', (req, res) => {
  res.send(`Hello from your VPS! 🚀 App Version: ${version}`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
