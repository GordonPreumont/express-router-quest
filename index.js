const express = require('express');
const comments = require('./routes/comments');
const posts = require('./routes/posts');

const app = express();
const port = 8000;


app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});

app.use('/api/comments', comments);
app.use('/api/posts', posts)
