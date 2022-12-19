// import { kebabCase } from 'lodash'

import * as userDal from '../dal/users'
// import { GetAllIngredientsFilters } from '../dal/types'
import { UserInput, UserOuput } from '../models/User'

export const create = async (payload: UserInput): Promise<UserOuput> => {
    // let slug = kebabCase(payload.name)
    // const slugExists = await userDal.checkSlugExists(slug)

    // payload.slug = slugExists ? `${slug}-${Math.floor(Math.random() * 1000)}` : slug

    return userDal.create(payload)
}

// export const update = async (id: number, payload: Partial<IngredientInput>): Promise<IngredientOuput> => {
//     if (payload.name) {
//         let slug = kebabCase(payload.name)
//         const slugExists = await ingredientDal.checkSlugExists(slug)

//         payload.slug = slugExists ? `${slug}-${Math.floor(Math.random() * 1000)}` : slug
//     }

//     return ingredientDal.update(id, payload)
// }

// export const getById = (id: number): Promise<IngredientOuput> => {
//     return ingredientDal.getById(id)
// }

// export const deleteById = (id: number): Promise<boolean> => {
//     return ingredientDal.deleteById(id)
// }

export const getUser = (payload: UserInput): Promise<UserOuput | null> => {
    return userDal.getUser(payload)
}