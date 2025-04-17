const express = require('express');
const router = express.Router();
const {authtoken, isAdmin} = require('../middleware/authMiddleware');
const {sendAdminNotification} = require('../controllers/adminController');

router.post('/notify', authtoken, isAdmin, sendAdminNotification);

module.exports = router;