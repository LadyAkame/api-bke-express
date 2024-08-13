import express from 'express'
import singupController from '../controllers/auth/singupController'
import loginController from '../controllers/auth/loginController'
import logoutController from '../controllers/auth/logoutController'
const router = express.Router()

router.post('/singup', singupController)

router.post('/login', loginController)

router.post('/logout', loginController)

export default router