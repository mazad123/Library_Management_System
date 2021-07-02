const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminModel = new Schema({
    email: {
<<<<<<< HEAD
        type: String
=======
        type: String, required: [true, 'Email is required']
>>>>>>> 50304ffc1e0a4ef2f7990ee0c8cae5db4d886fb4
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