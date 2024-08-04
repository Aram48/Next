import { readFile } from "fs/promises";
import { IBook } from "./types";

export const getAllBooks = async (): Promise<IBook[]> => {

    const data = await readFile("books.json", "utf-8");
    if (data) {
        return JSON.parse(data);
    }
    return [];
}

export const getBookById = async (id: number): Promise<IBook | null> => {
    const books = await getAllBooks();
    return books.find((book) => book.id == id) || null;
}
