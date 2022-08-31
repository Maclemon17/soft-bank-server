const mongoose = require("mongoose");

// TRANSACTION HISTORY SCHEMA
const historySchema  = mongoose.Schema({
    senderName: { type: String, required: true }
});