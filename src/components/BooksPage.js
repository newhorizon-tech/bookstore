import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import { saveBook } from '../redux/books/books';

const BooksPage = () => {
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    const title = e.target.querySelector('#input-title');
    const category = e.target.querySelector('#input-category');
    const data = {
      item_id: uuidv4(),
      title: title.value,
      category: category.value,
    };
    title.value = '';
    category.value = '';
    dispatch(saveBook(data));
  };
  const bookList = useSelector((state) => state.books);
  return (
    <div>
      <ul id="book-list">
        {bookList.map((book) => <Book key={book.item_id} book={book} />)}
      </ul>
      <div id="newbook">
        <h3> ADD NEW BOOK </h3>
        <form id="add-book-form" onSubmit={(e) => submitForm(e)}>
          <input id="input-title" placeholder="Book Title" />
          <input id="input-category" placeholder="Category" />
          <button type="submit"> ADD BOOK </button>
        </form>
      </div>
    </div>
  );
};

export default BooksPage;
