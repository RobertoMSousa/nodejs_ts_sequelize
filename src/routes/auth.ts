import { Router, Request, Response } from 'express'

import jwt from 'jsonwebtoken';
import { jwtExpiration, secret } from '../config';
import { hashPassword } from '../controllers/auth';
import * as userController from '../controllers/users'
import { CreateUserDTO } from '../dto/user.dto'

const authRouter = Router()


authRouter.post('/login', async (req: Request, res: Response) => {
    try {
        const payload: CreateUserDTO = req.body
        if (!payload.email || !payload.password) {
            res.status(400).send({ data: "Must provide email and password" });
        }

        const findUser = await userController.getUser(payload)
        if (!findUser) {
            res.status(401).send({ data: "User or password not valid" });
        }
        const { password } = payload
        const encryptedPwd = await hashPassword(password);

        if (encryptedPwd !== findUser?.password) {
            res.status(401).send({ data: "User or password not valid" });
        }

        const token = jwt.sign(
            { email: findUser?.email },
            secret,
            { expiresIn: 60 * parseInt(jwtExpiration), algorithm: 'HS512' }
        );

        res.setHeader('Authorization', `Bearer ${token}`);
        res.status(200).send();
    } catch (error) {
        return res.status(500)
    }

})

authRouter.post('/logout', async (req: Request, res: Response) => {
    res.removeHeader('Authorization');
    res.status(200).json();
})

authRouter.post('/recover', async (req: Request, res: Response) => {
    try {
        return res.status(501).send({ data: "method under construction" })
    } catch (error) {
        return res.status(500)
    }
})

authRouter.post('/signup', async (req: Request, res: Response) => {
    try {
        const payload: CreateUserDTO = req.body
        if (!payload.email || !payload.password) {
            res.status(400).send({ data: "Must provide email and password" });
        }
        const findUser = await userController.getUser(payload)
        if (findUser) {
            return res.status(409).send({ data: "User already exists" })
        }
        const result = await userController.create(payload)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500)
    }

})




export default authRouter