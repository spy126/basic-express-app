

exports.getAllPosts = (req, res) => {
    res.send([
        {id: 1, title: 'Hello'},
        {id: 2, title: 'Hi there'}
    ])
}

exports.getPostDetail = (req, res) => {
    const {id} = req.params

    res.send({
        id,
        title: `Hello ${id}`
    })
}

exports.privatePost = (req, res) => {
    res.send({
        id: 9999,
        title: 'This is a private post.'
    })
}
