"use client"

import { InputUser } from "@/lib/types"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface Props {
    params: {
        key: number
    }
}

export default function Details({ params }: Props) {

    const [user, setUser] = useState<InputUser | null>(null);
    const router = useRouter();

    const handleUpdate = (event: React.FormEvent) => {
        event.preventDefault();
        axios
            .put("/users/" + params.key, user)
            .then(res => {
                router.push("/");
            });
    }

    useEffect(() => {
        axios
            .get(`/users/` + params.key)
            .then(res => {
                setUser(res.data.user);
            })
    }, [params.key]);

    return <>
        <h1 className="is-size-3">Details No. {params.key}</h1>
        <div className="columns">
            <div className="column is-two-fifths">
                <form className="box" onSubmit={handleUpdate}>
                    <div className="field my-4">
                        <p className="is-size-4">Update User</p>
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-dark"
                            placeholder="Enter a name"
                            name="name"
                            value={user?.name}
                            onChange={e => setUser(u => u ? { ...u, name: e.target.value } : null)}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-dark"
                            placeholder="Enter a surname"
                            name="surname"
                            value={user?.surname}
                            onChange={e => setUser(u => u ? { ...u, surname: e.target.value } : null)}

                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-dark"
                            placeholder="Enter a salary"
                            name="salary"
                            value={user?.salary}
                            onChange={e => setUser(u => u ? { ...u, salary: +e.target.value } : null)}

                        />
                    </div>
                    <div className="field my-4">
                        <button type="submit" className="button is-success">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}