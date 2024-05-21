import * as usersDatabaseProvider from '../database/usersRepository';
import { InsertUserType, RequestUserType } from '../schemas/userSchema';

export async function getAllUsers() {
    const users = await usersDatabaseProvider.get();
    return users
}

export async function createUser(user: RequestUserType) {
    const createdUsers = await usersDatabaseProvider.save(<InsertUserType>user)
    
    return createdUsers
}