const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { body, check, validationResult } = require('express-validator');

const Model = require("../../Model");
const messagesList = require('../../Message');
const statusCodeList = require("../../StatusCode");
const constantList = require("../../Constant");

const messages = messagesList.message.MESSAGES;
const statusCode = statusCodeList.statusCodes.STATUS_CODE;
const constant = constantList.constant;

const getRegister = async (req, res) => {
  res.render('admin/index-admin', { title: 'Admin', path: 'register', message:'' });
}

const submitRegister = async (req, res, next) => {
  try {

    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.render('admin/index-admin', { title: 'Admin', path: 'register', message:JSON.stringify(validationErrors.array()) });
    }

    req.body.email = (req.body.email).toLowerCase();
    const saltRounds = 10;
    req.body.password = bcrypt.hashSync(req.body.password, saltRounds);
    req.body.role = constant.ROLE.ADMIN;
    const admin = await new Model.Admin(req.body).save();
    if (admin) {
      return res.redirect('/api/v1/admin/login');
      // return res.send({
      //   statusCode: statusCode.CREATED,
      //   messages: messages.ADMIN_REGISTER_SUCCESS,
      //   data: admin
      // });
    } else {
      return res.render('admin/index-admin', { title: 'Admin', path: 'register', message:messages.ADMIN_REGISTER_FAIL });
      // return res.send({
      //   statusCode: statusCode.BAD_REQUEST,
      //   messages: messages.ADMIN_REGISTER_FAIL
      // });
    }

  } catch (err) {
    console.log('err -  ', err);
    return res.render('admin/index-admin', { title: 'Admin', path: 'register', message:err});
    // return res.send({
    //   statusCode: statusCode.INTERNAL_SERVER_ERROR,
    //   messages: messages.INTERNAL_SERVER_ERROR,
    //   data:err
    // });
  }
}

// const getLogin = async (req, res, next) => {
//   try {
//     const message = messages.SUCESS;
//     return res.send({ message: message, string: 'Api works fine', statusCode: statusCode.SUCCESS, constant:'Role Admin - '+ constant.ROLE.ADMIN });
//   } catch (error) {
//     console.log(error);
//   }
// }

const getLogin = async (req, res, next) => {
  return res.render('admin/index-admin', { title: 'Admin', path: 'login', message: '' });
}

const submitLogin = async (req, res, next) => {
  try {

    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.render('admin/index-admin', { title: 'Admin', path: 'login', message:JSON.stringify(validationErrors.array()) });
    }

    const email = (req.body.email).toLowerCase();
    let admin = await Model.Admin.findOne({email: email, role:constant.ROLE.ADMIN});

    if (!admin)  return res.render('admin/index-admin', { title: 'Admin', path: 'login', message: messages.INVALID_EMAIL });

    const isValid = bcrypt.compareSync(req.body.password, admin.password);

    if (isValid) {
      const token = jwt.sign({ _id: admin._id }, "jwtSecretKey");
      res.cookie('adminToken', token);
      admin['token'] = token;
      delete admin.password;
      res.redirect('/api/v1/admin/dashboard');
    } else {
      return res.render('admin/index-admin', { title: 'Admin', path: 'login', message: messages.INVALID_PASSWORD });
    }
  } catch (err) {
    console.log(err);
    return res.render('admin/index-admin', { title: 'Admin', path: 'login', message:err});
  }
}

const validate = (method) => {
  switch (method) {
      case 'register': {
        return [
          check('email').not().isEmpty().isEmail().withMessage('Invalid Email'),
          check('password').not().isEmpty().trim(),
        ]
      }
      case 'login': {
        return [
          check('email').isEmail().withMessage('Invalid Email'),
          check('password', "Password required").not().isEmpty().trim()
        ]
      }
      case 'default': {

      }
  }
}

exports.getRegister = getRegister;
exports.submitRegister = submitRegister;
exports.getLogin = getLogin;
exports.submitLogin = submitLogin;
exports.validate = validate;