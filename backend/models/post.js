const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
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
      replyUserName: {
        type: String,
        required: true,
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
