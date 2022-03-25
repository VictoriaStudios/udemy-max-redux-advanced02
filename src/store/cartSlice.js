import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartVisible:true,
    items: [
    ]
}

const cartSlice = createSlice ({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem (state,action) {
            const index = state.items.findIndex (element => element.item.name === action.payload.name)
            if (index === -1) {
                state.items.push ({item:action.payload, amount: 1})
            }
            else {
                state.items[index].amount++
            }
        },
        removeItem (state, action) {
            const index = state.items.findIndex (element => element.item.name === action.payload.name)
            if (index === -1) {
                return
            }
            else if (state.items[index].amount > 1){
                state.items[index].amount--
            }
            else if (state.items[index].amount === 1) {
                state.items.splice (index,1)
            }
        },
        toggleCart (state) {
            state.cartVisible = !state.cartVisible
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer