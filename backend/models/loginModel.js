const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const loginSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("user", loginSchema);
