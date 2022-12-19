// import { Optional } from "sequelize/types"

export type CreateUserDTO = {
    email: string;
    password: string;
}

export type ValidateUserDTO = {
    email: string;
    password: string;
}

// export type UpdateIngredientDTO = Optional<CreateIngredientDTO, 'name'>

// export type FilterIngredientsDTO = {
//     isDeleted?: boolean
//     includeDeleted?: boolean
// }