import { ICourse } from "../api"
import Image from "next/image"
import Link from "next/link"

interface IProps {
    courses: ICourse[]
}

export const CoursesList = ({ courses }: IProps) => {
    return <>
        <div className="columns">
            {
                courses.map(course => {
                    return <div key={course.id} className="column">
                        <Image
                            src={"/" + course.cover}
                            width={200}
                            height={100}
                            alt="course photo"
                        />
                        <p>{course.name}</p>
                        <p>for {course.duration} months</p>
                        <p>whit {course.price} per month</p>
                        <ul>
                            {
                                course.modules?.map(module =>
                                    <li key={module.id}>{module.name}</li>)
                            }
                        </ul>
                        <Link href={"/courses/edit/" + course.id}>Edit</Link>
                    </div>
                })
            }
        </div>
    </>
}