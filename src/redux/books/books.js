import { createSlice, current } from '@reduxjs/toolkit';

const baseUrl = 'https://bookstore-56a93-default-rtdb.europe-west1.firebasedatabase.app/';

const url = `${baseUrl}books.json`;

const bookSlice = createSlice(
  {
    name: 'books',
    initialState: { loading: true, value: [] },
    reducers: {
      add: (state, action) => {
        const newState = { ...current(state) };
        newState.value = [...newState.value, action.payload];
        return newState;
      },
      delete: (state, action) => {
        const newState = { ...current(state) };
        newState.value = newState.value.filter((b) => b.item_id !== action.payload);
        return newState;
      },
      fetch: (state, action) => (
        { ...current(state), value: action.payload }
      ),
      loaded: (state) => ({ ...current(state), loading: false }),
    },
  },
);

const removeBook = (id) => {
  const removeBookThunk = async (dispatch) => {
    const response = await fetch(`${baseUrl}/books/${id}.json`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const msg = await response;
    if (msg.status) {
      dispatch({ type: 'books/delete', payload: id });
    }
  };
  return removeBookThunk;
};

const saveBook = (newBook) => {
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
      dispatch({ type: 'books/add', payload: newBook });
    }
  };
  return saveBookThunk;
};

const fetchBooks = async (dispatch) => {
  const response = await fetch(url);
  const books = await response.json();
  const bookList = Object.entries(books).map(([key, book]) => ({ ...book, item_id: key }));
  await dispatch({ type: 'books/fetch', payload: bookList });
  dispatch({ type: 'books/loaded' });
};

export { saveBook, removeBook, fetchBooks };

export default bookSlice.reducer;
