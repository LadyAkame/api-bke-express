import express from 'express'

const router = express.Router()

router.post('/singup', (req, res) => {
    res.json({message: "Rota de Auth/singup",})
})

router.post('/login', (req, res) => {
    res.json({message: "Rota de Auth/login",})
})

router.post('/logout', (req, res) => {
    res.json({message: "Rota de Auth/logout",})
})

export default router