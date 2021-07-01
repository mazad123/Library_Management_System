const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminModel = new Schema({
    email: {
        type: String
    },
    role: { 
        type: String,  required: [true, 'Role is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required.']
    },
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true,
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
});


const Admin = mongoose.model('Admin', AdminModel);
module.exports = Admin;