const Model = require("../../Model");
const messagesList = require('../../Message');
const statusCodeList = require("../../StatusCode");
const constantList = require("../../Constant");

const messages = messagesList.message.MESSAGES;
const statusCode = statusCodeList.statusCodes.STATUS_CODE;
const constant = constantList.constant;


const dashoboard = async (req, res, next) => {
  return res.render('admin/dashboard', { title: 'Admin', path: 'dashboard'});
}
exports.dashoboard = dashoboard;