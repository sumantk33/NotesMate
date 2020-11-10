const { json } = require("express");
const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const Post = require("../models/post");

// @desc    Get all posts in descending order of created time
// @route   GET /api/discuss
// @access  Public
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort("-sortingDate");

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Add a post
// @route   POST /api/discuss
// @access  Public
router.post("/", protect, async (req, res) => {
  try {
    const { createdAt, title, description, sortingDate } = req.body;

    const newPost = new Post({
      user: req.user._id,
      createdAt,
      description,
      title,
      sortingDate,
    });

    const result = await newPost.save();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Add a reply
// @route   POST /api/discuss/:id
// @access  Public
router.post("/:id", protect, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const { replyCreatedAt, replyDescription, replySortingDate } = req.body;

    post.replies = [
      ...post.replies,
      {
        replyUser: req.user._id,
        replyCreatedAt,
        replyDescription,
        replySortingDate,
      },
    ];

    const result = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: { replies: post.replies },
      },
      { new: true }
    );

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Delete a post
// @route   DELETE /api/discuss/:id
// @access  Public
router.delete("/:id", protect, async (req, res) => {
  try {
    const exists = await Post.findById(req.params.id);

    if (!exists) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (String(exists.user._id) === String(req.user._id)) {
      await Post.findByIdAndRemove(req.params.id);
      res.json({ message: "Deleted post successfully" });
    } else {
      res.status(400).json({ message: "The post dosen't belong to this user" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Delete a reply
// @route   DELETE /api/discuss/reply/:id
// @access  Public
router.delete("/reply/:postId/:replyId", protect, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({ message: "Post dosen't exist" });
    }

    if (String(post.user._id) === String(req.user._id)) {
      const { replies } = post;

      var updatedReplies = replies.filter(
        (reply) => String(reply._id) !== String(req.params.replyId)
      );

      const result = await Post.findByIdAndUpdate(
        req.params.postId,
        {
          $set: { replies: updatedReplies },
        },
        { new: true }
      );

      res.json(result);
    } else {
      res
        .status(400)
        .json({ message: "The reply dosen't belong to this user" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
