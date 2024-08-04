import Database from "better-sqlite3"

const db = new Database("lecturers.db");

export interface ILecture {
    id: number,
    name: string,
    surname: string,
    salary: number,
}

export type InputLecture = Omit<ILecture, "id">

export const getAllLecturers = (): ILecture[] => {
    return db.prepare(`
        SELECT * FROM lecturers    
    `).all() as ILecture[]
}

export const addLecture = (lecturers: InputLecture) => {
    return db.prepare(`
        INSERT INTO lecturers(name, surname, salary)
        VALUES(@name, @surname, @salary)
    `).run(lecturers)
}

export const getLecturersById = (id: number): ILecture => {
    return db.prepare(`
        SELECT * FROM lecturers WHERE id = ?    
    `).get(id) as ILecture
}

export const updateLecturerById = (id: number, lecturers: InputLecture) => {
    return db.prepare(`
        UPDATE lecturers set name = ?, surname = ?, salary = ? WHERE id = ?    
    `).run(lecturers.name, lecturers.surname, lecturers.salary, id);
}
