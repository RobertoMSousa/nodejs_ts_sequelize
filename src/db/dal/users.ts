
import bcrypt from "bcrypt";
import { User } from '../models'

import { UserInput, UserOuput } from '../models/User'

export const create = async (payload: UserInput): Promise<UserOuput> => {
    const newUser = await User.create(payload)
    return newUser
}

export const getUser = async (payload: UserInput): Promise<UserOuput | null> => {
    const user = await User.findOne({ where: { email: payload.email } })
    return user
}