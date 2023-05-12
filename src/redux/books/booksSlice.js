import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

// fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/', {
//   method: 'POST',
// })
//   .then((response) => response.json())
//   .then((data) => {
//     const appId = data;
//     console.log(appId); // unique identifier for the newly created app
//   });

const appId = '';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books';
const initialState = {
  bookItems: [],
  title: '',
  author: '',
  error: undefined,
  isLoading: false,
  count: 0,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

export const postBook = createAsyncThunk('books/postBook', async (newBook) => {
  try {
    const response = await axios.post(baseUrl, newBook);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // addBook: (state, action) => {
    //   state.bookItems.push(action.payload);
    // },
    // removeBook: (state, action) => {
    //   state.bookItems = state.bookItems.filter((book) => book.item_id !== action.payload);
    // },
    newTitle: (state, action) => {
      state.title = action.payload;
    },
    newAuthor: (state, action) => {
      state.author = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(postBook.pending, (state) => {
        state.isLoading = true;
        state.title = '';
        state.author = '';
      })
      .addCase(postBook.fulfilled, (state) => {
        state.isLoading = false;
        state.count += 1;
      })
      .addCase(postBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBook.fulfilled, (state) => {
        state.isLoading = false;
        state.count -= 1;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { newTitle, newAuthor } = booksSlice.actions;
export default booksSlice.reducer;
