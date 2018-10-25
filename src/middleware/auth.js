

exports.token = (req, res, next) => {
    const {token} = req.query

    if (!token || token !== 'my_password') {
        return res.status(403).send('You cannot acceess this resource')
    }

    next()
}
