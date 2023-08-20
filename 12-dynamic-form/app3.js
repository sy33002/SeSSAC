const express = require('express')
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('/views', 'views');

app.use(express.urlencoded({ extended: true}));
app.use(express.json())

app.get('/', (req, res) => {
    res.render('api');
});

app.listen(PORT, () => {
    console.log(`${PORT} is open!`);
});
