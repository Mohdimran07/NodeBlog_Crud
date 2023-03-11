const express = require('express');
const router = express.Router();

const { getAllBlogs, createBlog, getById, updateBlog, deleteBlog} = require('../controllers/BlogControllers');

router.route('/').get(getAllBlogs).post(createBlog)
router.route("/:id").get(getById).put(updateBlog).delete(deleteBlog)

module.exports = router;