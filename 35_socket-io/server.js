const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app); // express 앱으로 http 서버를 생성
const io = socketIO(server); // socket.io를 http 서버에 연결
const PORT = 8080;

// 사용자 닉네임 모음 객체
const nickArray = {}; // {socket.id : 키, 아이디: 네임}


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('chat');
});

function updateList() {
    io.emit('updateNicks', nickArray); // 전체 사용자 닉네임 모음 객체 전달
  }

// io.on(): socket 관련한 통신 작업을 처리
io.on('connection', (socket) => {
    // connection 이벤트는 클라이언트가 접속했을 때 발생
    // 콜백 함수의 인자로 소켓 객체를 제공

    console.log('서버 연결 완료 :: ', socket.id);
    // socket.id: 소켓 고유 아이디 (브라우저 탭 단위)

    // [실습 1]
    // socket.on('hello', (data) => {
    //     console.log(`${data.who} : ${data.msg}`);
    //     socket.emit('helloKr', { who: 'hello', msg: '안녕!!!!'});
    // })
    // socket.on('study', (data) => {
    //     console.log(`${data.who} : ${data.msg}`);
    //     socket.emit('studyKr', {who: 'study', msg: "let's study!"});
    // })
    // socket.on('bye', (data) => {
    //     console.log(`${data.who} : ${data.msg}`);
    //     socket.emit('byeKr', {who: 'bye', msg: "byebye"});
    // })

    // [실습 3] 채팅창 입장 안내 문구
    // io.emit('notice', `${socket.id} 님이 입장하셨습니다.`);

    // [실습 3-2]
    // emit() from server
    // - socket.emit(event_name, data) : 해당 클라이언트에게만 이벤트, 데이터를 전송
    // - io.emit(event_name, data): 서버에 접속된 모든 클라이언트 전송
    socket.on('setNick', (nick) => {
        console.log(`닉네임 설정 완료 :: ${nick}님 입장`);
        console.log('접속 유저 목록 :: ', nickArray);
        
        // 프론트에서 입력한 nick이 nickObs 객체에 존재하는지 검사
        // 이미 존재: error 이벤트 + '이미 존재하는 닉네임 입니다'
        // 새 닉네임: notice 이벤트 + '00님이 입장하셨습니다.'
        if (Object.values(nickArray).indexOf(nick) > -1 ) {
            socket.emit('error', `이미 존재하는 닉네임입니다.`);
        } else {
            // 새로운 닉네임
            nickArray[socket.id] = nick;
            io.emit('notice', `${nick}님이 입장하셨습니다.`);
            socket.emit('entrySuccess', nick); // 해당 소켓 데이터 전송
            io.emit('updateNicks', nickArray); // 전체 사용자 닉네임 모음 객체 전달
            updateList();
        }
    })

    // 실습 [3-3] 클라이언트 퇴장 시
    // "notice" 이벤트로 퇴장 공지
    socket.on('disconnect', () => {
        console.log(`접속 끊김 :: ${socket.id}`);
        io.emit('notice', `${nickArray[socket.id]}님이 퇴장하셨습니다.`);
        delete nickArray[socket.id];
        updateList();
    })

    // [실습 4] 채팅창 메세지 전송 Step1
    // send 이벤트를 받아서 모두에게 newMessage 이벤트로 {닉네임, 입력창내용} 데이터를 전송
    socket.on('send', (data) => {
        console.log("data >>", data);
        if (data.dm === 'all') {
            io.emit('sendMsg', { nick: data.nick, msg: data.msg }); 
        } 
        // [실습 5] 디엠인지 아닌지 구분해서 보내기
        // io.to(소켓아이디).emit(event_name, data): 소켓 아이디에 해당하는 클라이언트에게만 보내기
       else {
        let dmSocketId = data.dm;
        const sendData = {
            nick: data.nick,
            msg: data.msg,
            dm: '(속닥) ',
          };
        io.to(dmSocketId).emit('sendMsg', sendData);
            socket.emit('sendMsg', sendData);
        }
    })


});



server.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`);
});

