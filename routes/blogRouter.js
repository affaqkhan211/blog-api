import express from "express";
import { addBlog, blogDetail, getBlogs } from "../controllers/blogController.js";
const blogRouter = express.Router();

blogRouter.post("/add-blog", addBlog)
blogRouter.get("/blogs", getBlogs);
blogRouter.get("/blog-detail/:id", blogDetail)

export default blogRouter