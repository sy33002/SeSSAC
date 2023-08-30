const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models'); //./models/index.js

app.set('view engine', 'ejs');
app.set('/views', 'views');
app.use('/static', express.static(__dirname + '/static'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.get('*', (req, res) => {
  res.render('404');
});

db.sequelize.sync({ force: false }).then(() => {
  //force: false; 실제 데이터베이스에 테이블이 존재하지 않으면 모델에 정의한 대로 생성
  //force: true; 데이터베이스에 테이블 있어도 무조건 생성
  app.listen(PORT, () => {
    console.log(`${PORT} is open!`);
  });
}) 

