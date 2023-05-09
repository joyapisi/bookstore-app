import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkUp: (state) => {
      const { length } = state.categories;
      if (length === 0) {
        state.categories = 'Under construction';
      }
    },
  },
});

export const { checkUp } = categoriesSlice.actions;

export default categoriesSlice.reducer;
