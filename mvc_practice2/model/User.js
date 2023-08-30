// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'sessac2',
});

exports.signupUser = (data, callback) => {
    conn.query(
        `insert into user values('${data.id}', '${data.name}', '${data.pw}');`,
        (err, rows) => {
            if(err){
                throw err;
            }
            callback(true);
        }
    );
};

exports.loginUser = (data, callback) => {
    conn.query(
        `select name from user where userid = '${data.id}' and pw = '${data.pw}'`,
        (err, rows) => {
            if(err){
                console.error(error);
                callback(false);
                return ;
            }
            if (rows.length === 0) {
                callback(false);
                return ;
            }else{
                callback(true);
            }
        }
    );
};

exports.findUser = (data, callback) => {
    console.log('data = ', data.id);
    conn.query(
        `select * from user where userid='${data.id}'`,
        (err,rows) => {
            if (err) {
                throw err;
            }
            callback(rows[0]);
        });
    }

exports.editUser = (data, callback) => {
    console.log("data=", data);
    conn.query(
        `update user set name = '${data.name}', pw = '${data.pw}' where '${data.id}' = userid`,
        (err, rows) => {
            if(err){
                throw err;
                return;
            }
            callback(true);
        }
    );
};

exports.deleteUser = (data, callback) => {
    console.log("data=", data);
    conn.query(
        `delete from user where userid = '${data.id}'`,
        (err, rows) => {
            if(err){
                throw err;
                return;
            }
            callback(true);
        }
    );
};