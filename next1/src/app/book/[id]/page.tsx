import { getAllBooks, getBookById } from "@/app/lib/actions"

interface IProps {
    params: {
        id: number
        title: string,
        price: number,
        photo: string,
    }
}

export default async function Book(props: IProps) {

    const book = await getBookById(props.params.id);

    return <>
        <div>
            <img src={book?.photo} width="300px" height="400px" />
            <p>{book?.title}</p>
            <strong>{book?.price} $</strong>
        </div>
    </>
}

