
import * as service from '../db/services/UserService'
import { CreateUserDTO, ValidateUserDTO } from '../dto/user.dto'
import { User } from '../interfaces'
import { hashPassword } from './auth'


export const create = async (payload: CreateUserDTO): Promise<User> => {
    const { email, password } = payload
    const encryptedPwd = await hashPassword(password);
    return await service.create({ email, password: encryptedPwd })
}

export const getUser = async (payload: ValidateUserDTO): Promise<User | null> => {
    return await service.getUser(payload)
}