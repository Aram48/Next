"use client"

import { InputUser } from "@/lib/types"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Add() {

    const router = useRouter();

    const [user, setUser] = useState<InputUser>({
        name: "",
        surname: "",
        salary: 0,
    });

    const [error, setError] = useState<string>("");

    const handleSubmit = (event: React.FormEvent) => {

        event.preventDefault();
        if (!user.name.trim() || !user.surname.trim()) {
            setError("Please fill all the fields")
        } else {
            setError("")

            axios
                .post("/users", user)
                .then(res => {
                    console.log(res.data);
                    router.push("/");
                });
        }
    }

    return <>
        <h1 className="is-size-3">Add User</h1>
        <div className="columns">
            <div className="column is-two-fifths">
                <form className="box" onSubmit={handleSubmit}>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <div className="filed my-4">
                        <input
                            type="text"
                            className="input is-dark"
                            placeholder="Enter a name"
                            value={user.name}
                            onChange={e => setUser({ ...user, name: e.target.value })}
                        />
                    </div>
                    <div className="filed my-4">
                        <input
                            type="text"
                            className="input is-dark"
                            placeholder="Enter a surname"
                            value={user.surname}
                            onChange={e => setUser({ ...user, surname: e.target.value })}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-dark"
                            placeholder="Enter a salary"
                            value={user.salary}
                            onChange={e => setUser({ ...user, salary: +e.target.value })}
                        />
                    </div>
                    <div className="field my-4">
                        <button className="button is-success">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}
