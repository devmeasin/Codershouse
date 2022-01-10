const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    phone: {
        type: 'String',
        require: true
    },
    active: {
        type: 'Boolean',
        require: false,
        default: false
    }
}, { timestamps: true });



module.exports = mongoose.model('User', userSchema);