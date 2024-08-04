import { getAllLecturers } from "../lib/api";
import { LectureList } from "../lib/components/lecturer-list";

export default function Page() {
    const list = getAllLecturers();

    return <>
        <h1 className="is-size-1">Lecturers</h1>
        <LectureList lecturers={list} />
    </>
}