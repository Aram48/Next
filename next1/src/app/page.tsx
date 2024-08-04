import styles from "./page.module.css";
import { getAllBooks } from "./lib/actions";
import { Book } from "./lib/components/book";

export default async function Home() {

  const books = await getAllBooks();

  return (
    <main className="list">
      {
        books.map(book =>
          <div key={book.id}>
            <Book
              params={book}
            />
          </div>
        )
      }
    </main>
  );
}
