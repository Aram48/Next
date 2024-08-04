import { handleAdd } from "@/app/lib/actions/lecturer-action";

export default function Page() {
    return <div>
        <h1 className="is-size-4">Add Lecturers</h1>
        <div className="columns">
            <div className="is-two-fifty my-4">
                <form className="box" action={handleAdd}>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-dark"
                            name="name"
                            placeholder="Enter a name"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-dark"
                            name="surname"
                            placeholder="Enter a surname"
                        />
                    </div>
                    <div className="dield my-4">
                        <input
                            type="text"
                            className="input is-dark"
                            name="salary"
                            placeholder="Enter a salary"
                        />
                    </div>
                    <div className="field my-4">
                        <button className="button is-danger">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
}