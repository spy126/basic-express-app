const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Hello world')
})

exports.router = router