const express = require('express')
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'views');
app.use(express.urlencoded({ extended: true}));
app.use(express.json())

// indexRouter에서는 localhost:PORT/ 기본 경로
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// 404에러 처리, * : 제외한 모든 것 (보통 에러를 의미)
// 반드시 맨 마지막 라우트로 선언
app.get('*', (req, res) => {
    res.render('404');
});

// localhost:PORT로 express 앱이 실행!
app.listen(PORT, () => {
    console.log(`${PORT} is open!`);
});
