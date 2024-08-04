import { addModule } from "@/app/lib/actions/course-actions";
import { getAllCourses } from "@/app/lib/api";

export default function Page() {

    const courses = getAllCourses();

    return <>
        <h1 className="is-size-3">Add Module</h1>
        <div className="columns">
            <div className="column is-two-fifths">
                <form action={addModule}>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="name"
                            className="input is-dark"
                            placeholder="please enter a name"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-dark"
                            name="duration"
                            placeholder="please enter a duration"
                        />
                    </div>
                    <div className="field my-4">
                        <select name="courseId" className="input is-dark">
                            <option selected disabled value=""></option>
                            {
                                courses.map(c =>
                                    <option key={c.id} value={c.id}>{c.name}</option>
                                )
                            }
                        </select>
                    </div>
                    <button className="button is-dark">save</button>
                </form>
            </div>
        </div>
    </>
}