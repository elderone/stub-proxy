import express from 'express';

const app = express();
const port = process.env.EXPOSE_PORT || 80;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`app listening at ${port} port`);
});
