const express = require('express');
const admin = require('../../../../controller');
// const Authorization =  require("../../../policies");

const router = express.Router();

// auth
<<<<<<< HEAD
router.get('/getRegister', admin.authController.getRegister);
router.post('/register', admin.authController.register);
router.get('/login', admin.authController.login);
=======
router.get('/register',  admin.authController.getRegister);
router.post('/register', admin.authController.validate('register'), admin.authController.submitRegister);
router.get('/login', admin.authController.getLogin);
router.post('/login', admin.authController.validate('login'), admin.authController.submitLogin);

router.get('/dashboard', admin.dashboardController.dashoboard);
>>>>>>> 50304ffc1e0a4ef2f7990ee0c8cae5db4d886fb4
// router.post('/reset_password', admin.authController.resetPassword);
// router.get('/verify_link/:id', admin.authController.verifyLink);
// router.post('/forgotPassword', admin.authController.forgotPassword);


// router.get('/getProfile', Authorization.isAdminAuth, admin.adminController.getProfile);
// router.get('/logout', Authorization.isAdminAuth, admin.adminController.logout);
// router.post('/changePassword', Authorization.isAdminAuth, admin.adminController.changePassword);
// router.post('/updateProfile', Authorization.isAdminAuth, admin.adminController.updateProfile);

module.exports = router;