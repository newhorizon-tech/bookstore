import { createSlice, current } from '@reduxjs/toolkit';

const bookSlice = createSlice(
  {
    name: 'books',
    initialState: [],
    reducers: {
      addBook: (state, action) => [...current(state), { ...action.payload }],
      removeBook: (state, action) => current(state).filter((b) => b.id !== action.payload),
    },
  },
);

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
