const express = require('express');
const {validation, authenticate} = require('../../middlewares');
const {register, login, logout} = require('../../controllers/auth');
const {joiRegisterSchema, joiLoginSchema} = require('../../models');

const router = express.Router();

router.post('/register', validation(joiRegisterSchema), register);
router.post('/login', validation(joiLoginSchema), login);
router.post('/logout', authenticate, logout);

module.exports = router;


