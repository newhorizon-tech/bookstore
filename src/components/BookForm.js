import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addBook(data));
    setData({ title: '', author: '' });
  };

  return (
    <form id="add-book-form" onSubmit={(e) => submitForm(e)}>
      <input id="input-title" name="title" value={data.title} onChange={handleInput} placeholder="Book Title" />
      <input id="input-author" name="author" value={data.author} onChange={handleInput} placeholder="Book Author" />
      <button type="submit"> Add Book </button>
    </form>
  );
};

export default BookForm;
