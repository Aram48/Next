import Database from "better-sqlite3"
import { InputUser, IUser } from "./types";
const db = new Database("social.db");

export const addUser = (user: InputUser): Database.RunResult => {
    return db.prepare(`
        INSERT INTO users(name, surname, salary)
        VALUES(@name, @surname, @salary)    
    `).run(user);
}

export const getAllUsers = (): IUser[] => {
    return db.prepare(`
        SELECT * FROM users
    `).all() as IUser[];
}

export const getUserById = (id: number): IUser => {
    return db.prepare(`
        SELECT * FROM users WHERE id = ?    
    `).get(id) as IUser
}

export const updateUser = (id: number, body: InputUser): Database.RunResult => {
    return db.prepare(`
        UPDATE users SET name = ?, surname = ?, salary = ? WHERE id = ?    
    `).run(body.name, body.surname, body.salary, id);
}

export const deleteUser = (id: number): Database.RunResult => {
    return db.prepare(`
        DELETE FROM users WHERE id = ?     
    `).run(id);
}