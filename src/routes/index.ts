import { validateToken } from './../controllers/auth';
import { Router } from 'express'

import usersRouter from './users';
import todoRouter from './todo';
import authRouter from './auth';


const router = Router()

router.use('/user', validateToken, usersRouter)
router.use('/todo', validateToken, todoRouter)
router.use('/auth', authRouter)

export default router