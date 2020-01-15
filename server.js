
////To unlock login >> https://www.google.com/settings/security/lesssecureapps
const express = require('express')
const SendEmail = require('./SendEmail')

//config
const port = 3003
const app = express()

app.get('/', (req, res) => {
    res.json({
        success: true,
        msg: `Working...`
    })
})

// let from = '"Palavra Viva 🙏🏻" <app.palavra.viva@gmail.com>'
// let subject = 'Avaliação do Protótipo - Palavra Viva'
// let to = 'matheusgoislimasilva@gmail.com'
// let auth = {
//     user: 'app.palavra.viva@gmail.com',
//     pass: 'viva123!@#'
// }
        
        
app.post('/send', async (req, res, next) => { 
    try {
        let options = SendEmail.config(req.body)
        let content = await SendEmail.send(options)
        
        res.json({
            success: true,
            msg: `Send request with Success!`,
            content
        })

    } catch (error) {
        next(error)
    }
})

app.use((error, req, res, next) => {
    res.json({
        success: false,
        msg: `Error: ${error}`
    })
})

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))