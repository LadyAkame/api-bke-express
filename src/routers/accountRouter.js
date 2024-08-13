import express from 'express'
import deleteController from '../controllers/account/deleteController'
import listController from '../controllers/account/listController'
import getByIdController from '../controllers/account/getByIdController'
import putController from '../controllers/account/putController'
const router = express.Router()

router.post('/',)

router.get('/list', listController)

router.get('/:id', getByIdController)

router.put('/:id', putController)

router.delete('/:id', deleteController)

export default router