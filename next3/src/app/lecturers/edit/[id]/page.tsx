import { handleUpdate } from "@/app/lib/actions/lecturer-action";
import { getLecturersById } from "@/app/lib/api"

interface IProps {
    params: {
        id: number
    }
}

export default function Page({ params }: IProps) {

    const lecturers = getLecturersById(params.id);

    return <>
        <p className="is-size-1">Edit Lecturer No. {params.id}</p>
        <div className="columns">
            <div className="column  is-two-fifths my-4">
                <form className="box" action={handleUpdate}>
                    <input
                        type="hidden"
                        name="id"
                        defaultValue={params.id}
                    />
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="name"
                            placeholder="enter a name"
                            defaultValue={lecturers.name}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="surname"
                            placeholder="enter a surname"
                            defaultValue={lecturers.surname}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="salary"
                            placeholder="enter a salary"
                            defaultValue={lecturers.salary}
                        />
                    </div>
                    <div className="field my-4">
                        <button className="button is-danger">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}