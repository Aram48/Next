"use client";

import { handleAdd } from "@/app/lib/actions/course-actions";
import { ImagePicker } from "@/app/lib/components/image-picker";
import { useActionState } from "react";
import { useState } from "react";

export default function Page() {
    const [state, handleAddAction] = useActionState(handleAdd, { message: "" });
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        duration: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div>
            <h1 className="is-size-5">Add Course</h1>
            <div className="columns">
                <div className="column  is-two-fifths my-4">
                    <form className="box" action={handleAddAction}>
                        {state?.message && <p>{state.message}</p>}
                        <div className="field my-4">
                            <input
                                type="text"
                                className="input is-primary"
                                name="name"
                                placeholder="enter a name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="field my-4">
                            <input
                                type="text"
                                className="input is-primary"
                                name="price"
                                placeholder="enter a price"
                                value={formData.price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="field my-4">
                            <input
                                type="text"
                                className="input is-primary"
                                name="duration"
                                placeholder="enter a duration"
                                value={formData.duration}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="field my-4">
                            <ImagePicker />
                        </div>
                        <div className="field my-4">
                            <button className="button is-danger">submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
