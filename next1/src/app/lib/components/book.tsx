import { IBook } from "../types"

interface Props {
    params: IBook,
}

export const Book = ({ params }: Props) => {
    return <div>
        <img src={params.photo} />
        <p>{params.title}</p>
        <strong>{params.price}$</strong>
        <br />
        <a href={`/book/${params.id}`}>Show</a>
    </div >
}