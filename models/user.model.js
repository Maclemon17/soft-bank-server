const mongoose = require("mongoose");

// user schema
const userSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    accountNumber: { type: Number, required: true },
    availBalance: { type: Number, default: 0 },
    password: { type: String, required: true },
});

// user model
const userModel = mongoose.model("user_collection", userSchema);

module.exports = userModel;