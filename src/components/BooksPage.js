import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import { addBook } from '../redux/books/books';

const BooksPage = () => {
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    const title = e.target.querySelector('#input-title');
    const author = e.target.querySelector('#input-author');
    const data = {
      id: uuidv4(),
      title: title.value,
      author: author.value,
    };
    title.value = '';
    author.value = '';
    dispatch(addBook(data));
  };
  const bookList = useSelector((state) => state.books);

  return (
    <div>
      <h1> Books </h1>
      <ul>
        {bookList.map((book) => <Book key={book.id} book={book} />)}
      </ul>
      <form id="add-book-form" onSubmit={(e) => submitForm(e)}>
        <input id="input-title" placeholder="Book Title" />
        <input id="input-author" placeholder="Book Author" />
        <button type="submit"> Add Book </button>
      </form>
    </div>
  );
};

export default BooksPage;
