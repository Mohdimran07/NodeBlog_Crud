

const mongoose = require("mongoose");


const BlogSchema = mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model('Blog', BlogSchema);
