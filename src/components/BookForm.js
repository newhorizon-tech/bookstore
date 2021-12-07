import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import { addBook } from '../redux/books/books';

const BookForm = () => {
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
  return (
    <form id="add-book-form" onSubmit={(e) => submitForm(e)}>
      <input id="input-title" placeholder="Book Title" />
      <input id="input-author" placeholder="Book Author" />
      <button type="submit"> Add Book </button>
    </form>
  );
};

export default BookForm;
