const router = require('express').Router();
const authController = require('./controller/auth-controller');
const activatedController = require('./controller/activated-controller');
const authMiddleWare = require('./middlewares/auth-middleware')


router.post('/api/send-otp', authController.sendOtp);
router.post('/api/verify-otp', authController.verifyOtp);
router.post('/api/activate', authMiddleWare, activatedController.activate);


module.exports = router;