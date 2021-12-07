import { createSlice, current } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const bookSlice = createSlice(
  {
    name: 'books',
    initialState: [],
    reducers: {
      addBook: (state, action) => [...current(state), { id: uuidv4(), ...action.payload }],
      removeBook: (state, action) => current(state).filter((b) => b.id !== action.payload),
    },
  },
);

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
