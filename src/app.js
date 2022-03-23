import express from 'express';

const app = express();
const port = process.env.EXPOSE_PORT || 80;

app.use(express.urlencoded({
  extended: true,
}));
app.set('view engine', 'hbs');
app.set('views', './src/templates');

app.get('/', (req, res) => {
  res.render('index.hbs', {
    title: 'Тестовый заголовок',
  });
});

app.post('/', (req, res) => {
  const { username } = req.body;
  console.log(`get the username is "${username}"`);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`app listening at ${port} port`);
});
