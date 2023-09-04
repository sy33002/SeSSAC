
const userAll = require('../models/User').users.split('\n');

let userid = [];
let userpw = [];
let username = [];
for (let i = 0; i< userAll.length; i++){
    userid.push(userAll[i].split('//')[0]);
    userpw.push(userAll[i].split('//')[1]);
    username.push(userAll[i].split('//')[2]);
}

exports.main = (req,res) => {
    res.render('main');
};

exports.login = (req,res) => {
    const userData ={
        reqBody: req.body,
        userid: userid,
        userpw: userpw,
        username: username,
    }
    res.send(userData);
}
