import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  BookItems: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.BookItems.push(action.payload);
    },
    removeBook: (state, action) => {
      state.BookItems = state.BookItems.filter((book) => book.item_id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
