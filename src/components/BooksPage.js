import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';

const BooksPage = () => {
  const bookList = useSelector((state) => state.books);

  return (
    <div>
      <h1> Books </h1>
      <ul>
        {bookList.map((book) => <Book key={book.id} book={book} />)}
      </ul>
      <BookForm />
    </div>
  );
};

export default BooksPage;
