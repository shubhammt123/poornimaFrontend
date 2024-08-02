import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : [],
    cartItems : [],
    status  : "idle",
    error : null
}

const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        fetchProduct(state , action){
           state.products = action.payload;
           state.status = "idle"
        },
        setStatus(state,action){
            state.status = action.payload;
        },
        setError(state,action){
            state.status = "error",
            state.error = action.payload
        },
        addCartItem (state,action){
            state.cartItems.push(action.payload);
        }
    }
});

export const { fetchProduct , setStatus , setError ,addCartItem } = productSlice.actions;

export default productSlice.reducer;