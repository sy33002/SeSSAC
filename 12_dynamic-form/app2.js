const express = require('express')
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('/views', 'views');

app.use(express.urlencoded({ extended: true}));
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index2');
});

app.get('/axios', (req, res) => {
    res.send(req.query);
    console.log(req.query);
});

app.post('/post', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`${PORT} is open!`);
});
