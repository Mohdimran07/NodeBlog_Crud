const Blog = require('../models/Blog');

const getAllBlogs = async() => {
    return await Blog.find();
} 

const createBlog = async (blog) => {
    return await Blog.create(blog)
} 

const getById = async(Id) => {
    return await Blog.findById(Id);
}

const updateBlog = async (id, blog) => {
    return await Blog.findByIdAndUpdate(id, blog, {
        new: true,
      });
}

const deleteBlog = async (id) => {
    return await Blog.findByIdAndDelete(id)
}

module.exports = {
    getAllBlogs,
    createBlog,
    updateBlog,
    getById,
    deleteBlog
}