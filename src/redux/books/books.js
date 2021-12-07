import { createSlice, current } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const url = 'https://bookstore-56a93-default-rtdb.europe-west1.firebasedatabase.app/books.json';

const bookSlice = createSlice(
  {
    name: 'books',
    initialState: [],
    reducers: {
      addBook: (state, action) => [...current(state), { ...action.payload }],
      removeBook: (state, action) => current(state).filter((b) => b.item_id !== action.payload),
      fetchBooks: (state, action) => action.payload,
    },
  },
);

const removeBook = (id) => {
  const removeBookThunk = async (dispatch) => {
    const response = await fetch(`${url}/${id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const msg = await response;
    if (msg.status) {
      dispatch({ type: 'books/removeBook', payload: id });
    }
  };
  return removeBookThunk;
};

const saveBook = (book) => {
  const newBook = { item_id: uuidv4(), ...book };
  const saveBookThunk = async (dispatch) => {
    const response = await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    });
    const msg = await response;
    if (msg.status) {
      dispatch({ type: 'books/addBook', payload: newBook });
    }
  };
  return saveBookThunk;
};

const fetchBooks = async (dispatch) => {
  const response = await fetch(url);
  const books = await response.json();
  dispatch({ type: 'books/fetchBooks', payload: books });
};

export { saveBook, removeBook, fetchBooks };

export default bookSlice.reducer;
