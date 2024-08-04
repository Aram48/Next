"use client"

import Link from "next/link"
import { useEffect, useState } from "react";
import { IUser } from "./types";
import axios from "axios";

export const UserList = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        axios
            .get("/users")
            .then(res => {
                setUsers(res.data)
            })
    }, []);

    return <>
        <h1 className="is-size-2">UserList</h1>
        <Link className="is-size-4" href="/users/add">Add User</Link>
        <div className="columns field my-4 is-desktop">
            {
                users.map(user => <div key={user.id} className="column box">
                    <h1 className="is-size-5">Name: {user.name}</h1>
                    <h1 className="is-size-5">Surname: {user.surname}</h1>
                    <strong className="is-size-6"> Salary: {user.salary} AMD</strong>
                    <p className="is-size-5">
                        <Link
                            href={"/users/" + user.id + "/details"}
                            className="button is-success my-2">
                            Details
                        </Link>
                    </p>
                    <Link href={"/users/" + user.id + "/delete"} className="button is-success my-2">Delete User</Link>
                </div>)
            }
        </div>
    </>
}