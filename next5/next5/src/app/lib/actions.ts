"use server"

import { PartialUser } from "./types"
import bcrypt, { hash } from "bcrypt";
import { nanoid } from "nanoid";
import { addUser, getAllUsers, getUserByLogin } from "./api";
import { redirect } from "next/navigation";

export const handleSignup = async (prev: unknown, data: FormData) => {

    const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    let user: PartialUser = {
        id: nanoid(),
        name: data.get("name") as string,
        surname: data.get("surname") as string,
        login: data.get("login") as string,
        password: data.get("password") as string,
    }

    if (user.login) {
        const existingUser = getUserByLogin(user.login);
        if (existingUser) {
            return {
                message: "User already exists with this login"
            }
        }
    }

    if (user.password) {
        if (!reg.test(user.password)) {
            return {
                message: "Please write a strong password"
            };
        }
    }

    if (user.password) {
        user.password = await bcrypt.hash(user.password, 10);
    }

    addUser(user);

    redirect("/login");

}

export const handleLogin = async (prev: unknown, data: FormData) => {

    const userLogin = data.get("login") as string;
    const password = data.get("password") as string;

    const user = getUserByLogin(userLogin);

    if (!user) {
        return {
            message: "User not found"
        }
    }

    const isPasswordValid = await bcrypt.compare(password, user?.password);

    if (!isPasswordValid) {
        return {
            message: "Incorrect password"
        }
    }

    if (!data.get("login") || !data.get("password")) {
        return {
            message: "Please fill all the fields"
        }
    }

    redirect("/profile");
}
