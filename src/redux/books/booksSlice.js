import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  BookItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  // reducers: {
  //   increment: (state) => {
  //     state.value += 1;
  //   },
  //   decrement: (state) => {
  //     state.value -= 1;
  //   },
  //   incrementByAmount: (state, action) => {
  //     state.value += action.payload;
  //   },
  // },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
