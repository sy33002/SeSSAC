// TODO: 컨트롤러 코드
const User = require('../model/User');

exports.main = (req, res) => {
    res.render('index');
};

exports.signup = (req, res) => {
    res.render('signup');
};

exports.signin = (req, res) => {
    res.render('signin');
};


exports.signupUser = (req, res) => {
    User.signupUser(req.body, (result) => {
        res.send(result);
    });
};

exports.loginUser = (req, res) => {
    User.loginUser(req.body, (result) => {
        res.send(result);
    });
};

exports.profile = (req, res) => {
    console.log(req.body);
    const userId = {
        id: req.body.userid,
    };
    User.findUser(userId, (result) =>{
        const {userid, name, pw} = result;
        res.send({userid, name, pw});
    });
};

exports.editUser = (req, res) => {
    User.editUser(req.body, (result) => {
        res.send(result);
    });
};

exports.deleteUser = (req, res) => {
    User.deleteUser(req.body, (result) => {
        res.send(result);
    });
};