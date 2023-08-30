
const express = require('express')
const router = express.Router();
const controller = require('../controller/Cvisitor');

router.get('/', controller.main);
router.get('/visitors', controller.visitor);
router.post('/visitor', controller.postVisitor);
router.delete('/visitor', controller.deleteVisitor);
router.get('/visitor/:id', controller.getVisitor);
router.patch('/visitor', controller.updateVisitor);

module.exports = router;


