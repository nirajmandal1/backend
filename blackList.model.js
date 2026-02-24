const mongoose = require("mongoose")

const blackListSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    expiresAt: {
        type: Date,
        default: Date.now,
        index: { expires: '3d' }
    }
}, {
    timestamps: true
})

const tokenBlackListModel = mongoose.model("blacklist", blackListSchema)

module.exports = tokenBlackListModel
