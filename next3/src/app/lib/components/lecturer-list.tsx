import Link from "next/link";
import { ILecture } from "../api";

interface IProps {
    lecturers: ILecture[]
}

export const LectureList = ({ lecturers }: IProps) => {
    return <>
        <div className="columns">
            {
                lecturers.map(lec => {
                    return <div key={lec.id} className="column">
                        <p>{lec.name}</p>
                        <p>{lec.surname}</p>
                        <p>{lec.salary}</p>
                        <Link href={"/lecturers/edit/" + lec.id}>Edit</Link>
                    </div>
                })
            }
        </div>
    </>
}