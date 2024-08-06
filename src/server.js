import express from 'express'

const app = express()

app.post('/auth/singup', (req, res) => {
    res.json({message: "Rota de Auth/singup",})
})

app.post('/auth/login', (req, res) => {
    res.json({message: "Rota de Auth/login",})
})

app.post('/auth/logout', (req, res) => {
    res.json({message: "Rota de Auth/logout",})
})

app.post('/account', (req, res) => {
    res.json({message: "Rota de POST Account",})
})

app.get('/account/list', (req, res) => {
    res.json({message: "Rota de GET Account/List",})
})

app.get('/account/:id', (req, res) => {
    res.json({message: "Rota de GET Account ID",})
})

app.put('/account/:id', (req, res) => {
    res.json({message: "Rota de PUT Account",})
})

app.delete('/account/:id', (req, res) => {
    res.json({message: "Rota de DELETE Account",})
})

app.listen(3000, () => {
    console.log('Servidor Rodando em http://localhost:3000')
})