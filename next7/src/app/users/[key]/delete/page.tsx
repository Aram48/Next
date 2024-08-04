"use client"

import { useEffect, useState } from "react";
import { getUserById } from "@/lib/api";
import { InputUser } from "@/lib/types";
import axios from "axios";
import { useRouter } from "next/navigation";


interface Props {
    params: {
        key: number
    }
}
export default function Delete({ params }: Props) {

    const [user, setUser] = useState<InputUser | null>(null);
    const router = useRouter();
    console.log(user);

    useEffect(() => {
        axios
            .get("/users/" + params.key)
            .then(res => {
                setUser(res.data.user);
            })
    }, [params.key]);

    const handleDelete = (key: number) => {
        axios
            .delete("/users/" + params.key)
            .then(res => {
                router.push("/");
            });
    }

    return <>
        <h1 className="is-size-3">Delete User</h1>
        <div className="columns">
            <div className="column is-two-fifths box">
                <h1 className="is-size-5">Name: {user?.name}</h1>
                <h1 className="is-size-5">Surname: {user?.surname}</h1>
                <h1 className="is-size-5">Salary: {user?.salary}</h1>
                <button
                    onClick={() => handleDelete(params.key)}
                    className="button is-success">
                    Delete
                </button>

            </div>
        </div>
    </>
}