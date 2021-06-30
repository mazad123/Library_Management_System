const Model = require("../../Model");

const messagesList = require('../../Message');
const statusCodeList = require("../../StatusCode");
const constantList = require("../../Constant");

const messages = messagesList.message.MESSAGES;
const statusCode = statusCodeList.statusCodes.STATUS_CODE;
const constant = constantList.constant;


const login = async (req, res, next) => {
  try {
    const message = messages.SUCESS;
    return res.send({ message: message, string: 'Api works fine', statusCode: statusCode.SUCCESS, constant:'Role Admin - '+ constant.ROLE.ADMIN });
  } catch (error) {
    console.log(error);
  }
}

const getRegister = async (req, res) => {
  console.log('get register work fine');
  res.render('admin/register');
}

const register = async (req, res, next) => {
  try {
    const admin = await new Model.Admin(req.body).save();
    if (admin) {
      return res.send({
        statusCode: statusCode.CREATED,
        messages: messages.ADMIN_REGISTER_SUCCESS,
        data: admin
      });
    } else {
      return res.send({
        statusCode: statusCode.BAD_REQUEST,
        messages: messages.ADMIN_REGISTER_FAIL
      });
    }

  } catch (err) {
    console.log('err -  ', err);
    return res.send({
      statusCode: statusCode.INTERNAL_SERVER_ERROR,
      messages: messages.INTERNAL_SERVER_ERROR,
      data:err
    });
  }

}

exports.login = login;
exports.register = register;
exports.getRegister = getRegister;