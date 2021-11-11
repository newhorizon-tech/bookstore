import { createSlice, current } from '@reduxjs/toolkit';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const apiId = 'a1XVlmDaV1nrjtVqGql8';

const url = `${baseUrl}/apps/${apiId}/books`;

const bookSlice = createSlice(
  {
    name: 'books',
    initialState: [],
    reducers: {
      addBook: (state, action) => [...current(state), { ...action.payload }],
      removeBook: (state, action) => current(state).filter((b) => b.id !== action.payload),
      fetchBooks: (state, action) => action.payload,
    },
  },
);

const saveBook = (book) => {
  const saveBookThunk = async (dispatch) => {
    const response = await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    const msg = await response;
    console.log(msg);
    dispatch({ type: 'books/addBook', payload: book });
  };
  return saveBookThunk;
};

const fetchBooks = async (dispatch) => {
  const response = await fetch(url);
  const books = await response.json();
  const bookList = Object.entries(books).map(([id, [book]]) => (
    {
      item_id: id,
      title: book.title,
      category: book.category,
    }
  ));
  dispatch({ type: 'books/fetchBooks', payload: bookList });
};

export { saveBook, fetchBooks };

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
