const Notification = require('../models/notificationModel');

exports.sendAdminNotification = async (req,res)=> {
    const {message, type, recipients} = req.body;
    const notifications = recipients.map(userId=>({
        sender: req.user._id,
        recepients: [userId],
        type,
        message,
        status: type === 'critical'? 'sent' : 'queued',
        }));
    
        const saved = await Notification.insertMany(notifications);
        res.status(200).json(saved);
};

