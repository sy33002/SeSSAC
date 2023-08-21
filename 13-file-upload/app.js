const express = require('express');
const app = express();
const PORT = 8000;

// multer 관련 설정
const multer = require('multer');
const path = require('path'); // 경로에 관한 내장 모듈
const upload = multer({
  dest: 'uploads/', // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
                    // => uploads/라는 파일에 사용자가 업로드한 파일을 저장하겠다.
});

// multer 세부 설정
const uploadDetail = multer({
    // storage: 저장할 공간에 대한 정보
    // done(null,xx ...) 여기서 null은 error를 의미하는 매개변수
    storage: multer.diskStorage({
        destination(req, file, done) { // done: callback 함수이다.
            done(null,'uploads/'); // 파일을 업로드할 경로 설정
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname); // 파일 "확장자"를 추출 (.txt, .png 등)
            // basename: 원본 파일에서 확장자를 제외한 파일 이름만 추출
            done(null, path.basename(file.originalname, ext) + Date.now() + ext); // 파일이름 + 날짜 + 확정자
        },
    }),
    // limits: 파일 제한 정보
    limits: {fileSize: 5* 1024 * 1024}, // 5MB를 의미
});

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));

// body-parser 내장 라이브버리: 미들웨어
// 단점: 멀티파트 데이터를 처리하지 못함! (이미지, 동영상, 파일 등)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

// 1. single(): 하나의 파일을 업로드
// upload.single('userFile'): 클라이언트의 요청이 들어오면
// multer 설정(upload 변수)에 따라 파일을 업로드 한 후, req.file 객체 생성
// single() 인자는 input 태그의 name 속성과 일치시켜야 함
app.post('/upload', uploadDetail.single('userFile'), (req, res) => {
//   req.file: 파일 업로드 정보 저장되어 있음
//    req.body: 파일 외의 정보들 저장
    console.log(req.file);
    console.log('-------');
    console.log(req.body);
    res.send('파일 업로드 완료!');
});
//   req.file에 대한 console.log 결과
//   {
//     fieldname: 'userFile',  = 폼에 정의한 name값
//     originalname: '2.jfif', = 원본 파일명
//     encoding: '7bit', = 파일 인코딩 타입
//     mimetype: 'image/jpeg', = 파일 타입
//     destination: 'uploads/', = 파일 저장 경로
//     filename: 'd366ada7dc36dc8115edaf1428721f9b', = destination에 저장된 파일명
//     path: 'uploads\\d366ada7dc36dc8115edaf1428721f9b', = destination에 업로드 된 파일 전체 경로
//     size: 65180 = 파일 크기
//   }

// ////////////////////////////////////////////////////////////////////////////////////////
// 2. array() : 여러 파일을 한 번에 업로드
app.post('/upload/array', uploadDetail.array('userFiles'), (req,res)  => {
	console.log(req.files); // 여러 개라서 배열로 찍힘
	console.log(req.body);
	res.send('하나의 인풋에 여러 파일 업로드 완료!');
});

////////////////////////////////////////////////////////////////////////////////////////////
// 3. fields() : 여러 파일을 각각 인풋에 업로드
// req.files에서 파일 정보를 확인
// fields() 매개 변수로 input 태그의 name을 각각 넣기
app.post(
	'/upload/fields',
	uploadDetail.fields([{ name: 'userFile1' }, { name: 'userFile2' }]),
	(req, res) => {
	  console.log(req.files); // { userFile1: [ {파일_정보} ], userFile2: [ {파일_정보} ]} 객체 안에 배열 형태로 각 파일 정보
	  console.log(req.body);
	  res.send('하나의 인풋에 여러 파일 업로드 완료!');
	}
  );

// uploadDetail.array('userFiles'): 클라이언트 요청이 들어오면 multer 설정(uploadDetail 변수)에 따라 파일을 업로드한 후, req.files 객체 생성
app.listen(PORT, function () {
  console.log(`${PORT} is opening!`);
});


