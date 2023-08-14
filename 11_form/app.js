const express = require('express')
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs'); // 익스프레스 웹에  ejs 템플릿을 사용할 것이다
app.set('/views', 'views'); // views라는 폴더에 views를 모아놓을 거야

// 미들웨어(middleware)
// : 요청(req)과 응답(res)의 중간에서 작업하는 코드
// app.use()

//req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true})); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형식으로 데이터를 주고 받겠다.

// 라우팅(Routing) - 주소를 만들자, 설정하자
// GET '/' => index.ejs를 보여줌
app.get('/', (req, res) => {
    // res.render(ejs_경로, 데이터)
    // ejs_경로: views/ 폴더 내부 ejs 파일의 주소
    // 데이터: 뷰에 넣어줄 정보
    res.render('index', {title: '폼 전송을 연습해보자!' });
});

// get '/getForm' => 임의의 메세지 전송
app.get('/getForm', (req, res) => {
    // get 방식은 res.query에 정보를 담가서 옴
    console.log(req.query);
    res.render('result', {
        title: 'GET 요청',
        userInfo: req.query,
    });
});

// post '/postForm' => 임의의 메세지 전송
app.post('/postForm', (req, res) => {
    // post 방식은 res.body에 정보를 담가서 옴
    console.log(req.body);
    res.render('result', {
        title: 'GET 요청',
        userInfo: req.body,
    });
});

app.listen(PORT, () => {
    console.log(`${PORT} is open!`);
});

