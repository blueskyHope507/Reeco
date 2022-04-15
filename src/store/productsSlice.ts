import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../@types/product';
import { api } from '../utils/api';

export const getFilteredProducts = createAsyncThunk<Product[], string>(
  '/api/products/filtered',
  async (filterKey) => {
    const products = await api
      .get<Product[]>('/api/products/filtered', {
        params: { filterKey: filterKey }
      })
      .then((res) => res.data);
    return products;
  }
);

interface CommonState {
  products: null | Array<Product>;
}

const initialState = {
  products: null
} as CommonState;

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFilteredProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  }
});

export default productsSlice.reducer;
