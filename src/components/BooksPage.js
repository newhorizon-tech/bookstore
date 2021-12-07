import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';

const BooksPage = () => {
  const bookList = useSelector((state) => state.books);
  return (
    <div>
      <ul id="book-list">
        {bookList.map((book) => <Book key={book.item_id} book={book} />)}
      </ul>
      <BookForm />
    </div>
  );
};

export default BooksPage;
