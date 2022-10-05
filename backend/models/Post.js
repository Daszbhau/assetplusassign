var mongoose = require("mongoose");

var postSchema = mongoose.Schema(
    {
        name: String,
        desc: String,
        img:
        {
            data: Buffer,
            contentType: String
        }

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Post", postSchema)