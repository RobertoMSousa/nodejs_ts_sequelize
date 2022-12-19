import { Router, Request, Response } from 'express'
import { validateToken } from '../controllers/auth';

const usersRouter = Router()



usersRouter.get('/profile', validateToken, (_req: Request, res: Response) => {
    res.status(200).json({ data: 'user profile data' });
});

export default usersRouter