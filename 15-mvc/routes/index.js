// 이 파일은 mvc 패턴에서 router 역할을 수행
// 모듈!!
// 이 모듈의 역할: 
// 경로 선언과 관련된 내용 기술
const express = require('express')
const controller = require('../controller/Cmain');
const router = express.Router();

router.get('/', controller.main);
router.get('/comments', controller.comments);
router.get('/comment/:id', controller.comment);

// (임시) data
// const comments = [
//     {
//       id: 1,
//       userid: 'helloworld',
//       date: '2022-10-31',
//       comment: '안녕하세요^~^',
//     },
//     {
//       id: 2,
//       userid: 'happy',
//       date: '2022-11-01',
//       comment: '반가워유',
//     },
//     {
//       id: 3,
//       userid: 'lucky',
//       date: '2022-11-02',
//       comment: '오 신기하군',
//     },
//     {
//       id: 4,
//       userid: 'bestpart',
//       date: '2022-11-02',
//       comment: '첫 댓글입니당ㅎㅎ',
//     },
//     {
//         id: 5,
//         userid: 'apple',
//         date: '2022-11-03',
//         comment: '알리알리얄라숑',
//       },
// ];

// 이 파일의 기본 경로: localhost: PORT/
// 하기는 controller 없는 버전

// GET localhost:PORT/
// router.get('/', (req, res) => {
//     res.render('index');
// });
    
// router.get('/comments', (req, res) => {
//     res.render('comments', { comments });
// });
    
// router.get('/comment/:id', (req,res) => {
//     console.log(req.params);
//     const cmtId = Number(req.params.id);
//     // : id 0, 7같은 존재하지 않는 id로 접근 시 404페이지
//     if (cmtId < 1 || cmtId > comments.length) {
//         return res.render ('404'); }
//     // : id 변수에 숫자가 아닌 문자가 온다면 404페이지
//     if (isNaN(cmtId)) {
//         return res.render ('404'); }
//     res.render('comment', {comment: comments[cmtId -1]});
// });




// module.exports 구문을 통해 router를 내보내야
// 다른 모듈(파일)에서 router 객체를 사용 가능
module.exports = router;


