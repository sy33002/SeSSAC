// TODO: 라우트 설정
// TODO: 라우트 설정
const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

router.get('/', controller.main); 

router.get('/signup', controller.signup);
router.get('/signin', controller.signin);

router.post('/signup', controller.signupUser);
router.post('/signin', controller.loginUser);
router.post('/profile', controller.profile);
router.post('/profile/edit', controller.editUser);
router.post('/profile/delete', controller.deleteUser);

module.exports = router;
