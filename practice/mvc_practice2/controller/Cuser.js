// TODO: 컨트롤러 코드
const { User } = require('../models');
const { Op } = require('sequelize');

exports.main = (req, res) => {
    res.render('index');
};

exports.signup = (req, res) => {
    res.render('signup');
};

exports.signin = (req, res) => {
    res.render('signin');
};


exports.signupUser = async (req, res) => {
    // User.signupUser(req.body, (result) => {
    //     res.send(result);
    // });
    console.log('req.body=', req.body);
    const { userid, name, pw } = req.body;
    const result = await User.create({
        userid,
        name,
        pw,
    });
    res.send(result);
};

exports.loginUser = async(req, res) => {
//  User.loginUser(req.body, (result) => {
//  res.send(result);
//  });
    console.log('req.body = ', req.body);
    const { userid, pw } = req.body;
    const result = await User.findOne({
        where: { 
        [Op.and]: [
            { userid: userid }, 
            { pw: pw }
        ]
      }
    });
    if (!result) {
        res.send({success: false});
    } else {
        res.send({success: true});
    }
};

exports.profile = async (req, res) => {
//    User.findUser(userId, (result) =>{      
//    const { userid, name, pw } = result;
//      res.render('profile',{ userid, name, pw });
//  });
    const result = await User.findOne({
        where: { userid: req.body.userid }
    });
    console.log('result = ', result);
    const { userid, name, pw } = result;
    res.render('profile', { userid, name, pw });
};

exports.editUser = async (req, res) => {
//  User.editUser(req.body, (result) => {
//    res.send(result);
//  });
    const result = await User.update({
        name: req.body.name,
        pw: req.body.comment,
    }, {
        where: {userid: req.body.userid}
    });
    res.send(result);
};

exports.deleteUser = async (req, res) => {
//  User.deleteUser(req.body, (result) => {
//    res.send(result);
//  });
    console.log('req = ', req.body);
    const result = await User.destroy({
        where: { userid: req.body.userid},
    });
    console.log('delete result =',result);
    if (result === 1){
        res.send(true);
    }else {
        res.send(false);
    }
};