const SendEmail = require('./sendEmail')
const express = require('express')
const app = express()
const port = 3000

app.get('/', async (req, res) => { 
    res.send('Hello World!')
})

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))