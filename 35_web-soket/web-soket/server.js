const ws = require('ws');
const express = require('express');
const app = express();
const PORT= 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})


const wsServer = new ws.Server({server}); // 웹 소켓 서버 접속

const sockets= [];

//  on : 이벤트 등록 함수
wsServer.on('connection', (socket) => {
    sockets.push(socket); // 배열에 접속한 클라이언트 객체 추가

    // 클라이언트 메세지 수신
    socket.on('message', (message) => {
      console.log(`클라이언트로 부터 받은 메세지 :: ${message}`);

      // 웹 소켓 서버에 접속한 모든 클라이언트(브라우저 탭)에게 메세지 전송
      // = 브로드캐스팅(여러 컴퓨터한테 데이터 전송)
        sockets.forEach((socket) => {
          socket.send(`${message}`);        
        });
    });

    socket.on('close', () => {
      console.log('[클라이언트 연결 종료]')
    })
})
