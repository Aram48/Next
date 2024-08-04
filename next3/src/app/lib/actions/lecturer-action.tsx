"use server"

import { addLecture, InputLecture, updateLecturerById } from "../api";
import { redirect } from "next/navigation";

export const handleAdd = async (data: FormData) => {

    const lecturer: InputLecture = {
        name: data.get("name") as string,
        surname: data.get("surname") as string,
        salary: +(data.get("salary") as string),
    }

    addLecture(lecturer);
    redirect("/lecturers");
}

export const handleUpdate = async (data: FormData) => {
    let lecturer: InputLecture = {
        name: data.get("name") as string,
        surname: data.get("surname") as string,
        salary: +(data.get("salary") as string)
    }
    let id = +(data.get("id") as string)
    updateLecturerById(id, lecturer);
    redirect("/lecturers");
}