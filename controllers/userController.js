const User = require('../models/userModel');
const Notification = require('../models/notificationModel');
const jwt = require('jsonwebtoken');

const gentoken = (id) => jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'});

exports.registerUser = async (req,res) => {
    const {name, email, password} = req.body;
    const userExists = await User.findOne({email});
    if(userExists){
        return res.status(400).json({message: 'User already exists'});
    }
    const user = await User.create({name, email, password});
    res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: gentoken(user._id),
    });
};

exports.loginUser = async (req,res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user&&(await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: gentoken(user._id),
        });
    } else {
        res.status(401).json({message: 'Invalid email or password'});
    }
};

exports.updateProfile = async (req,res) => {
    const user = await User.findById(req.user._id);
    if(user){
        user.name = req.body.name || user.name;
        user.mobile = req.body.mobile || user.mobile;
        user.bio = req.body.bio || user.bio;
        user.availability = req.body.availability || user.availability;
        const updatedUser = await user.save();
        res.json(updatedUser);
    } else {
        res.status(404).json({message: 'User not found'});
    }
};

exports.sendNotification = async (req,res) => {
    const {recipients, message} = req.body;
    const currentTime = new Date().toTimeString().split(' ')[0];
    const notificationDocs = [];

    for(let userId of recipients){
        const recipient = await User.findById(userId);
        let isAvailable = false;
        recipient.availability.forEach(slot=>{
            if(slot.start<=currentTime && slot.end>=currentTime) isAvailable = true;
        });
        const status = isAvailable ? 'sent' : 'queued';
        notificationDocs.push({
            sender: req.user._id,
            recipients: [userId],
            message,
            status
        });

        const notifications = await Notification.insertMany(notificationDocs);
        res.status(200).json(notifications);
    }
}
