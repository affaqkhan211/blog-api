import Blogs from "../models/blogModel.js";

export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blogs.find();
        res.status(200).json(blogs)
    } catch (error) {
        res.status(501).json(error)
    }
}

export const addBlog = async (req, res) => {
    try {
        const {
            title,
            image,
            category,
            author,
            readingTime,
            content,
            tags
        } = req.body;
        
        const newBlog = new Blogs({
            title,
            image,
            category,
            author,
            readingTime,
            content,
            tags
        });

        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const blogDetail = async (req,res) => {
    const blogId = req.params.id;

    try {
        const blog = await Blogs.findById(blogId);

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}