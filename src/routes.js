const router = require('express').Router()

const auth = require('./middleware/auth')

router.get('/', (req, res) => {
    res.send('Hello world')
})

const postCtrl = require('./controllers/post')
router.get('/posts/private', auth.token, postCtrl.privatePost)
router.get('/posts', postCtrl.getAllPosts)
router.get('/posts/:id', postCtrl.getPostDetail)

exports.router = router