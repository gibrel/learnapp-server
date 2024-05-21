import { Static, Type } from '@sinclair/typebox'
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-typebox';
import dayjs from 'dayjs';

export const users = sqliteTable('users', {
    id: integer('id').primaryKey({ autoIncrement: true }).notNull(),
    firstName: text('first_name').notNull(),
    lastName: text('last_name'),
    email: text('email').notNull(),
    passwordHash: text('password_hash').notNull(),
    isActive: integer('is_active', { mode: 'boolean' }).notNull().default(true),
    createdAt: integer('created_at').notNull().default(dayjs().unix()),
    updatedAt: integer('updated_at').notNull().default(dayjs().unix())
});

// Schema for inserting a user - can be used to validate API requests
export const requestUserSchema = createInsertSchema(users, {
    createdAt: Type.String(),
    updatedAt: Type.String(),
});
export type RequestUserType = Static<typeof requestUserSchema>

// Schema for inserting a user - can be used for database insertion
export const insertUserSchema = createInsertSchema(users)
export type InsertUserType = Static<typeof insertUserSchema>

// Schema for selecting a user - can be used to validate API responses
export const responseUserSchema = createSelectSchema(users);
export type ResponseUserType = Static<typeof responseUserSchema>