const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
  res.render('index');
};

exports.visitor = (req, res) => {
  // model에서 getVisitors는 인자로 콜백함수를 받고 있는 과정을 넣어주는 중
  Visitor.getVisitors((result) => {
    res.render('visitor', { data: result });
  });
};

exports.postVisitor = (req, res) => {
  console.log('req.body = ', req.body);
  Visitor.postVisitor(req.body, (insertId) => {
    const { name, comment } = req.body;
    res.send({ id: insertId, name, comment });
  });
};

exports.deleteVisitor = (req, res) => {
  const { id } = req.body;
  Visitor.deleteVisitor(id, (result) => {
    res.send(result); // res.send(true)
  });
};

exports.getVisitor = (req, res) => {
    const{id} = req.params;
    Visitor.getVisitor(id, (result) => {
        res.send(result);
    });
};

exports.updateVisitor = (req, res) => {
  console.log(req.body);
  Visitor.updateVisitor(req.body, (result) => {
    res.send({ isUpdated: true });
  });
};
