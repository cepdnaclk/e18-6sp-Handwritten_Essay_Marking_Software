const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema(
    {
        filename: { type: String, required: true, unique: true },
        path: { type: String, required: true, unique: true },
        size: { type: Number, required: true },
        content : { type: String,  },
        // img: { type: String },
    },
    { timestamps: true }
);



module.exports = mongoose.model("File", FileSchema);

