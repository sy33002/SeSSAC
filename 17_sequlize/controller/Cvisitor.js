// const Visitor = require('../model/Visitor');
const { Visitor } = require('../models'); // ../models/index.js

exports.main = (req, res) => {
  res.render('index');
};

//read all
exports.visitor = async (req, res) => {
  // [before]
  // Visitor.getVisitors((result) => {
  //   res.render('visitor', { data: result });
  // });
  const result = await Visitor.findAll()
  // console.log(result); // create 메서드가 실행된 결과(== insert 한 데이터 값)
  res.render('visitor', { data: result });
};

exports.postVisitor = async (req, res) => {
  // [before]
  // console.log('req.body = ', req.body);
  // Visitor.postVisitor(req.body, (insertId) => {
  //   const { name, comment } = req.body;
  //   res.send({ id: insertId, name, comment });
  // });
  const { name, comment } = req.body;
  const result = await Visitor.create({
    name,
    comment,
  });
  console.log(result);
  res.send('임시응답');
};

exports.deleteVisitor = async (req, res) => {
  // [ before ]
  // const { id } = req.body;
  // Visitor.deleteVisitor(id, (result) => {
  //   res.send(result); // res.send(true)
  // });
  const { id } = req.body;
  const result = await Visitor.destroy({
    where: { id: id },
  });
  res.send(true);
};

exports.getVisitor = async(req, res) => {
    // [ before ]
    // const{id} = req.params;
    // Visitor.getVisitor(id, (result) => {
    //     res.send(result);
    // });
    const { id } = req.params;
    const result = await Visitor.findOne({
      where: {id: id}
    });
    console.log(result);
    res.send(result);
};

exports.updateVisitor = async(req, res) => {
  // [ before ]
  // console.log(req.body);
  // Visitor.updateVisitor(req.body, (result) => {
  //   res.send({ isUpdated: true });
  // });

  // update( {변경될 값}, {where절})
  const result = await Visitor.update({
    name: req.body.name,
    comment: req.body.comment,
  }, {
    where: {id: req.body.id}
  });
  res.send({isUpdated: true});
};
