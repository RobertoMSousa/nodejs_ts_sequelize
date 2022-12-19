import bcrypt from "bcrypt";
import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Salt, secret } from "../config";

export const hashPassword = async (plainText: string): Promise<string> => {
    return await bcrypt.hash(plainText, Salt);
}

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers['authorization']?.split(' ')[1]
        if (!token) {
            res.status(401).json({ err: 'not authorized' })
            return;
        }
        jwt.verify(token, secret);
        next();
    } catch (err) {
        res.status(401).json({ err: 'not authorized' })
        return;
    }
}