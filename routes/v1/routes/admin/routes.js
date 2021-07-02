const express = require('express');
const admin = require('../../../../controller');
// const Authorization =  require("../../../policies");

const router = express.Router();

// auth
router.get('/register',  admin.authController.getRegister);
router.post('/register', admin.authController.validate('register'), admin.authController.submitRegister);
router.get('/login', admin.authController.getLogin);
router.post('/login', admin.authController.validate('login'), admin.authController.submitLogin);

router.get('/dashboard', admin.dashboardController.dashoboard);
// router.post('/reset_password', admin.authController.resetPassword);
// router.get('/verify_link/:id', admin.authController.verifyLink);
// router.post('/forgotPassword', admin.authController.forgotPassword);


// router.get('/getProfile', Authorization.isAdminAuth, admin.adminController.getProfile);
// router.get('/logout', Authorization.isAdminAuth, admin.adminController.logout);
// router.post('/changePassword', Authorization.isAdminAuth, admin.adminController.changePassword);
// router.post('/updateProfile', Authorization.isAdminAuth, admin.adminController.updateProfile);

module.exports = router;