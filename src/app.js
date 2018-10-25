const express = require('express')
const app = express()

app.use(require('./routes').router)

app.listen(3001, () => {
    console.log('Server running at http://127.0.0.1:3001')
})