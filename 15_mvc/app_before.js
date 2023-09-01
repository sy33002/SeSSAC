const express = require('express')
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('/views', 'views');
app.use(express.urlencoded({ extended: true}));
app.use(express.json())

// (임시) DB로부터 받아온 댓글 목록
const comments = [
    {
      id: 1,
      userid: 'helloworld',
      date: '2022-10-31',
      comment: '안녕하세요^~^',
    },
    {
      id: 2,
      userid: 'happy',
      date: '2022-11-01',
      comment: '반가워유',
    },
    {
      id: 3,
      userid: 'lucky',
      date: '2022-11-02',
      comment: '오 신기하군',
    },
    {
      id: 4,
      userid: 'bestpart',
      date: '2022-11-02',
      comment: '첫 댓글입니당ㅎㅎ',
    },
    {
        id: 5,
        userid: 'apple',
        date: '2022-11-03',
        comment: '알리알리얄라숑',
      },
];
    
app.get('/', (req, res) => {
    res.render('index');
});
    
app.get('/comments', (req, res) => {
    res.render('comments', { comments });
});
    
app.get('/comment/:id', (req,res) => {
    console.log(req.params);
    const cmtId = Number(req.params.id);
    // : id 0, 7같은 존재하지 않는 id로 접근 시 404페이지
    if (cmtId < 1 || cmtId > comments.length) {
        return res.render ('404'); }
    // : id 변수에 숫자가 아닌 문자가 온다면 404페이지
    if (isNaN(cmtId)) {
        return res.render ('404'); }
    res.render('comment', {comment: comments[cmtId -1]});
});

app.get('/test/:id/:name', (req, res) =>{
    console.log(req.params);
    res.send('test res success!');
})






//404에러 처리, * : 제외한 모든 것 (보통 에러를 의미)
app.get('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`${PORT} is open!`);
});

