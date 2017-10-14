const express = require('express');

const app = express();

app.get('*', function(req, res) {
  console.log(req);
  res.send('<b>hello</b>');
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App listening on ${port}`);
