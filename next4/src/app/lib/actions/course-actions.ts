"use server"

import { createWriteStream } from "fs"
import { getCourseByName, CourseWithout, InputCourse, InputModule, addCourse, addModuleDb, updateCourseById } from "../api"
import { redirect } from "next/navigation"

export const handleAdd = async (prev: unknown, data: FormData) => {

    const name = data.get("name") as string;
    const price = data.get("price");
    const duration = data.get("duration");

    if (!name) {
        return {
            message: "Please fill the name",
        }
    } else if (!price) {
        return {
            message: "Please fill the price",
        }
    } else if (!duration) {
        return {
            message: "Please fill the duration",
        }
    } else if (isNaN(Number(price))) {
        return {
            message: "Price must be a number",
        }
    } else if (isNaN(Number(duration))) {
        return {
            message: "Duration must be a number"
        }
    }

    const existingCourse = await getCourseByName(name);
    if (existingCourse) {
        return {
            message: "Please choose another name for the course"
        }
    }

    const photo = data.get('cover') as File
    if (photo) {
        let extension = photo.type.split("/").at(-1)
        const filename = Date.now() + "." + extension

        const stream = createWriteStream("public/images/" + filename)

        const bufferedImage = await photo.arrayBuffer()

        stream.write(Buffer.from(bufferedImage))


        let course: InputCourse = {
            name: data.get('name') as string,
            price: +(data.get('price') as string),
            duration: +(data.get('duration') as string),
            cover: 'images/' + filename
        }

        addCourse(course)
        redirect("/courses")
    }
}



export const handleUpdate = async (data: FormData) => {
    let course: CourseWithout = {
        name: data.get('name') as string,
        price: +(data.get('price') as string),
        duration: + (data.get('duration') as string)
    }

    let id = +(data.get("id") as string);
    updateCourseById(id, course)
    redirect("/courses")
}

export const addModule = async (data: FormData) => {

    let obj: InputModule = {
        name: data.get("name") as string,
        duration: +(data.get("duration") as string),
        courseId: +(data.get("courseId") as string)
    }

    let result = addModuleDb(obj);
    redirect("/courses")

}
