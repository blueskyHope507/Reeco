import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Order, OrderProduct } from '../@types/order';
import { api } from '../utils/api';

export const getOrder = createAsyncThunk<Order>('/api/orders/order', async () => {
  const order = api.get<Order>('/api/orders/order').then((res) => res.data);
  return order;
});

interface ProductsType {
  products: null | Array<OrderProduct>;
}

export const addProductsToOrder = createAsyncThunk<{ status: number }, ProductsType>(
  '/api/orders/addProducts',
  async (data: ProductsType, thunkAPI) => {
    const result = await api.post<{ status: number }>('/api/orders/addProducts', data);
    if (result.status === 200) thunkAPI.dispatch(getOrder());
    return result;
  }
);

interface ApproveType {
  is_approve: boolean;
}

export const approveOrder = createAsyncThunk<{ status: number }, ApproveType>(
  '/api/orders/approve',
  async (data: ApproveType, thunkAPI) => {
    const result = await api.post<{ status: number }>('/api/orders/approve', data);
    if (result.status === 200) thunkAPI.dispatch(getOrder());
    return result;
  }
);

interface UpdateProductType {
  product: OrderProduct;
}

export const updateProduct = createAsyncThunk<{ status: number }, UpdateProductType>(
  '/api/orders/updateProduct',
  async (data: UpdateProductType, thunkAPI) => {
    const result = await api.post<{ status: number }>('/api/orders/updateProduct', data);
    if (result.status === 200) thunkAPI.dispatch(getOrder());
    return result;
  }
);

interface ChangeStatusType {
  product: {
    id: string;
    status: number;
  };
}

export const changeStatus = createAsyncThunk<{ status: number }, ChangeStatusType>(
  '/api/orders/changeStatus',
  async (data: ChangeStatusType, thunkAPI) => {
    const result = await api.post<{ status: number }>('/api/orders/changeStatus', data);
    if (result.status === 200) thunkAPI.dispatch(getOrder());
    return result;
  }
);

interface CommonState {
  order: null | Order;
}

const initialState = {
  order: null
} as CommonState;

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrder.fulfilled, (state, action) => {
      state.order = action.payload;
    });
  }
});

export default orderSlice.reducer;
