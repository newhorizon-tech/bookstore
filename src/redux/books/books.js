import { createSlice, current } from '@reduxjs/toolkit';

const sampleList = [{ id: 1, title: 'Great Circle', author: 'Maggie Shipstead' },
  { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 3, title: 'Nothing', author: 'John Snow' }];

const bookSlice = createSlice(
  {
    name: 'books',
    initialState: sampleList,
    reducers: {
      addBook: (state, action) => {
        const newId = state.length + 1;
        const newBook = { ...action.payload, id: newId };
        const newState = [...current(state), newBook];
        return newState;
      },
    },
  },
);

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
