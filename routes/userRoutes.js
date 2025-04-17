const express = require('express');
const router = express.Router();
const {authtoken, isAdmin} = require('../middleware/authMiddleware');
const {registerUser, loginUser, updateProfile, sendNotification} = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/notify', authtoken, sendNotification);
router.post('/profile', authtoken,updateProfile);

module.exports = router;