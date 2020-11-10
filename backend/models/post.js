const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  createdAt: {
    type: String,
    required: true,
  },
  sortingDate: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  replies: [
    {
      replyUser: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      replyCreatedAt: {
        type: String,
        required: true,
      },
      replyDescription: {
        type: String,
        required: true,
      },
      replySortingDate: {
        type: String,
        required: true,
      },
    },
  ],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
