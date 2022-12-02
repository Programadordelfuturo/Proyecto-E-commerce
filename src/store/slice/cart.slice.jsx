import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';


export const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
      setCart: (state, action) => {
        return action.payload
      }
    }
})


export const getCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api.academlo.tech/api/v1/cart', getConfig())
        .then((res) =>dispatch(setCart(res.data.data.cart.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const createCartThunk = (add) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://e-commerce-api.academlo.tech/api/v1/cart', add, getConfig())
        .then(() => dispatch(getCartThunk()))
        .finally(() => dispatch(setIsLoading(false)));
        // .catch(error=>console.log(res.data))
}

export const checkoutCartThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios.post('https://e-commerce-api.academlo.tech/api/v1/cart', {}, getConfig())
      .then(() => dispatch(getCartThunk()))
      .finally(() => dispatch(setIsLoading(false)));
}

export const deleteCartThunk = (e) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios.delete(`https://e-commerce-api.academlo.tech/api/v1/cart/${e}`,  getConfig())
      .then(() => dispatch(getCartThunk()))
      .finally(() => dispatch(setIsLoading(false)));
}



export const { setCart } = CartSlice.actions;

export default CartSlice.reducer;
// https://e-commerce-api.academlo.tech/api/v1/cart/1