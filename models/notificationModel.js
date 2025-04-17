const mongoose = require('mongoose');

const notificationSchema= mongoose.Schema({
    sender: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    recepient:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    message: String,
    type: {type: String, enum: ['critical', 'non-critical'], default: 'non-critical'},
    status: {type:String, enum :['sent', 'queued'], default: 'sent'},
    timestamp : {type:Date, default: Date.now},
});


module.exports = mongoose.model('Notification',notificationSchema);