const mysql = require('mysql');

// db 연결 설정
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'sessac2',
});

// rows에 결과가 담김
exports.getVisitors = (callback) => {
  conn.query('select * from visitor', (err, rows) =>{ 
  if (err) {
    throw err;
  }
  callback(rows);
  });
};

exports.postVisitor = (data, callback) => {
  // 매개변수
  // data: 프론트엔드에서 유저가 입력한 값 (req.body)
  // callback: query 실행 후 호출할 함수
  conn.query(
      `insert into visitor values(null, '${data.name}', '${data.comment}')`,
      (err, rows) => {
          if(err) {
              throw err;
          }
          callback(rows.insertId);
      }
  );
};

exports.deleteVisitor = (id, callback) => {
  console.log('model >>', id); // front에서 알려준 삭제할 데이터의 pk

  conn.query(`delete from visitor where id=${id}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('model >> ', rows);
    callback(true); // { id: id }로 쓸 수도 있음
  });
};

exports.getVisitor = (id, callback) => {
  conn.query(`select * from visitor where id = '${id}'`,
  (err, rows) => {
    if (err){
      throw err
    }
    console.log("rows: ",rows);
    callback(rows[0]);
  })
}

exports.updateVisitor = (updateData, callback) => {
  const {id, name, comment} = updateData;
  const sql = `update visitor set name='${name}', comment='${comment}' where id=${id}`;
  conn.query(sql, (err, rows) => {
    if(err) {
      throw err
    }
    callback();
  });
}