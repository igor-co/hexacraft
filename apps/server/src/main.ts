import express from 'express';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/posts', (req, res) => {
  res.send([
    { id: '1', title: 'Post 1', body: 'Post 1', publishedAt: new Date() },
    { id: '2', title: 'Post 2', body: 'Post 2', publishedAt: new Date() },
    { id: '3', title: 'Post 3', body: 'Post 3', publishedAt: new Date() },
  ]);
});

// create post endpoint
app.post('/posts', (req, res) => {
  res.send({ message: 'Post created' });
});

// update post endpoint
app.put('/posts/:id', (req, res) => {
  res.send({ message: 'Post updated' });
});

// delete post endpoint
app.delete('/posts/:id', (req, res) => {
  res.send({ message: 'Post deleted' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
