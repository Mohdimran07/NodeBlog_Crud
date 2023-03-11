const blogServices = require("../services/BlogService");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogServices.getAllBlogs();
    res.json({ data: blogs, status: "success" });
  } catch (error) {
    console.log(error);
  }
};

const createBlog = async (req, res) => {
  try {
    const blog = await blogServices.createBlog(req.body);
    res.json({ data: blog, status: "success" });
  } catch (error) {
    console.log(error);
  }
};

const getById = async (req, res) => {
  try {
    const blog = await blogServices.getById(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (error) {
    console.log(error);
  }
};

const updateBlog = async (req, res) => {
 
  try {
    const updatedBlog = await blogServices.updateBlog(req.params.id, req.body);
    res.json({ data: updatedBlog, status: "success" });
  } catch (error) {
    console.log(error);
  }
};

const deleteBlog = async (req, res) => {
  
  try {
    await blogServices.deleteBlog(req.params.id);
    res.json({ status: `successfully deleted ${req.params.id} this blog` });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createBlog,
  getAllBlogs,
  getById,
  updateBlog,
  deleteBlog,
};
