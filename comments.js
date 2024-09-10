// create web server
const express = require('express');
const app = express();
const port = 3000;

// create a route
app.get('/comments', function (req, res) {
  res.send('Comments will be displayed here');
});

// start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
