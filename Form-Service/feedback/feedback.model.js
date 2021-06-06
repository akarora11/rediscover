const mongoose = require('mongoose')

const FeedbackSchema  = new mongoose.Schema({
    fullname: {type : String, require: true},
    gender: {type : String, require: true},
    address: {type : String},
    email: {type : String, require: true},
    mobileNumber: {type : String, require: true},
    alternateNumber: {type: String},
    comment: {type : String},
})

const Feedback = mongoose.model('Feedback', FeedbackSchema)

module.exports = Feedback;