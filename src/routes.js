const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const Post = require('./models/Post')


routes.get("/", (req,res) => {
    return res.json({ message: "Hello World"})
})

routes.post("/posts", multer(multerConfig).single('file') ,async (req,res) => {
    const post = await Post.create({
        name: req.file.originalname,
        size: req.file.size,
        key: req.file.filename,
        url: `http://localhost:3333/uploads/${req.file.filename}`
    })

    return res.json(post)
})

routes.get("/posts", (req, res) => {
    return res.send()
})


module.exports = routes