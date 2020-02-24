const authController = require('./../controllers/authController');
const registerStudent = require('./../controllers/registerStudent');
const student = require('./../controllers/student');

const express = require('express');

const Router = express.Router();

Router.route('/login').post(authController.login);
Router.route('/register').post(authController.protect,authController.checkPayload, registerStudent.register);
Router.route('/student').post(student.register);
Router.route('/due').post(student.registerDue);
Router.route('/logout').get(authController.logout);

module.exports = Router;