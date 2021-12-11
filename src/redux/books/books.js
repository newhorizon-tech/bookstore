import { createSlice, current } from '@reduxjs/toolkit';

const baseUrl = 'https://bookstore-56a93-default-rtdb.europe-west1.firebasedatabase.app/';

const url = `${baseUrl}books.json`;

const bookSlice = createSlice(
  {
    name: 'books',
    initialState: { loading: true, modal: { open: false, data: { id: '', progress: '' } }, value: [] },
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
      fetch: (state, action) => ({ ...current(state), value: action.payload }),
      saveProgress: (state, action) => {
        const { id, progress } = action.payload;
        const newState = { ...current(state) };
        const newValue = newState.value.map((b) => ((b.item_id === id) ? { ...b, progress } : b));
        const endState = { ...newState, value: newValue };
        return endState;
      },
      loaded: (state) => ({ ...current(state), loading: false }),
      openModal: (state, action) => (
        { ...current(state), modal: { open: true, data: { ...action.payload } } }
      ),
      closeModal: (state) => (
        { ...current(state), modal: { open: false, data: { id: '', progress: '' } } }
      ),
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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    });
    const data = await response.json();
    if (response.status) {
      dispatch({ type: 'books/add', payload: { ...newBook, item_id: data.name } });
    }
  };
  return saveBookThunk;
};

const fetchBooks = async (dispatch) => {
  const response = await fetch(url);
  const books = await response.json();
  if (books !== null) {
    const bookList = Object.entries(books).map(([key, book]) => ({ ...book, item_id: key }));
    await dispatch({ type: 'books/fetch', payload: bookList });
  }
  dispatch({ type: 'books/loaded' });
};

const saveProgress = (newData) => {
  const saveProgressThunk = async (dispatch) => {
    const response = await fetch(`${baseUrl}/books/${newData.id}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ progress: newData.progress }),
    });
    await response.json();
    if (response.status) {
      await dispatch({ type: 'books/saveProgress', payload: newData });
    }
  };
  return saveProgressThunk;
};

const openModal = (data) => (dispatch) => dispatch({ type: 'books/openModal', payload: data });

const closeModal = (dispatch) => dispatch({ type: 'books/closeModal' });

export {
  saveBook, removeBook, fetchBooks, saveProgress, openModal, closeModal,
};

export default bookSlice.reducer;
