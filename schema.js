const mongoose = require('mongoose');

const commentsSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    commentedAt: {
        type: Date,
        default: Date.now
    }
})

// Schema for Blog Posts
const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
    },
    content: {
        type: String,
        required: true,
        minlength: 50,
    },
    author: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
    },
    category: {
        type: String,
        default: "General",
    },
    likes: {
        type: [String],
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
    comments: [commentsSchema],
});

// Model
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
