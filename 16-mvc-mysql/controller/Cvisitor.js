
const Visitor = require('../model/Visitor');

exports.main = (req,res) => {
    res.render('index');
};

exports.visitor = (req,res) => {
    // model에서 getVisitors는 인자로 콜백함수를 받고 있는 과정을 넣어주는 중
    Visitor.getVisitors((result) => {
        console.log('controller >>', result);
        res.render('visitor', {data: result})
    })
};
