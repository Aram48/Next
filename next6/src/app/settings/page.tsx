"use client"


import { useActionState } from 'react';
import { handleSettings } from '../lib/actions';

export default function Settings() {

    const [state, handleSettingsAction] = useActionState(handleSettings, { message: "" });

    return <div className="p-6">
        <h1 className="is-size-2">Settings</h1>
        <div className="columns">
            <div className="column is-two-fifths p-4">
                <form className="box" action={handleSettingsAction}>
                    {state?.message && <p style={{ color: "red" }}>{state.message}</p>}
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-dark"
                            name="login"
                            placeholder="Please enter your login"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-dark"
                            name="newLogin"
                            placeholder="Please enter your new login"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="password"
                            className="input is-dark"
                            name="password"
                            placeholder="Please enter your password"
                        />
                    </div>
                    <button className="button is-success">Submit</button>
                </form>
            </div>
        </div>
    </div>
}
