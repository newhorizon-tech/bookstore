import { createSlice, current } from '@reduxjs/toolkit';

const sampleList = [{ id: 'd0d7dcfb-5156-4134-aaac-b1b9451e3e7b', title: 'Great Circle', author: 'Maggie Shipstead' },
  { id: 'bcf07ff4-bdf0-47a9-beca-56b35abbcd82', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: '9fbf8521-abd0-46ee-a9fb-758d0151138e', title: 'Sample Book', author: 'John Sno' }];

const bookSlice = createSlice(
  {
    name: 'books',
    initialState: sampleList,
    reducers: {
      addBook: (state, action) => [...current(state), { ...action.payload }],
      removeBook: (state, action) => current(state).filter((b) => b.id !== action.payload),
    },
  },
);

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
