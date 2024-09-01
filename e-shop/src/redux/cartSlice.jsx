import {createSlice} from '@reduxjs/toolkit'
import { act } from 'react';

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
    address: "Nalco Colony, Q.N- A/16, C.S pur, BBSR"
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state, action){   
            const newItem = action.payload;
            const itemIndex = state.products.find((item)=> item.id === newItem.id)
            if (itemIndex){
                itemIndex.quantity +=1;
                itemIndex.totalPrice +=newItem.price;
            }else{
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.image
                })
            }

            state.totalPrice += newItem.price
            state.totalQuantity++;
            
        },

        removeFromCart(state, action){
            const id = action.payload
            const findItem = state.products.find((item)=>item.id === id)
            
            if(findItem){
                state.totalPrice -= findItem.totalPrice
                state.totalQuantity -= findItem.quantity
                state.products = state.products.filter((item)=>(item.id !== id))
            }
        },

        increaseQuantity(state, action){
            const newItem = action.payload;
            const findItem = state.products.find((item) => item.id === newItem.id)

            findItem.quantity++
            findItem.totalPrice += findItem.price
            state.totalQuantity++
            state.totalPrice += findItem.price
        },

        decreaseQuantity(state, action){
            const newItem = action.payload;
            const findItem = state.products.find((item)=> item.id === newItem.id)
            
            if(findItem.quantity > 1){
                if(findItem){
                    findItem.quantity--;
                    findItem.totalPrice -= findItem.price;
                    state.totalQuantity--;
                    state.totalPrice -= findItem.price;
                    }
            }
        },

        changeAddress(state, action){
            state.address = action.payload;
        },
           
    }
})

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity, changeAddress} = cartSlice.actions
export default cartSlice.reducer