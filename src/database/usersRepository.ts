import * as schemas from '../schemas/userSchema';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
const sqlite = new Database('./dev.db');
const db = drizzle(sqlite);

export async function get(userId?: Number) {
    const usersRepository = await db.select().from(schemas.users);

    return usersRepository
}

export async function save(user: schemas.InsertUserType) {
    const savedUsers = await db.insert(schemas.users).values(user).returning();

    return savedUsers
}