import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  bookItems: {},
  title: '',
  author: '',
  error: undefined,
  isLoading: false,
  count: 0,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get('...');
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

export const postBook = createAsyncThunk('books/postBook', async (newBook) => {
  try {
    const response = await axios.post('...', newBook);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookItems.push(action.payload);
    },
    removeBook: (state, action) => {
      state.bookItems = state.bookItems.filter((book) => book.item_id !== action.payload);
    },
    newTitle: (state, action) => {
      state.title = action.payload;
    },
    newAuthor: (state, action) => {
      state.author = action.payload;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
