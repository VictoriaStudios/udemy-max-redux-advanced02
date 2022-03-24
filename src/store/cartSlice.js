import { createSlice } from "@reduxjs/toolkit";
import { shopItems } from "../shopitems/shopitems";

const initialState = {
    cartVisible:true,
    items: [
        {item: shopItems.testItem, amount: 3}
    ]
}

const cartSlice = createSlice ({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem (state,action) {
            const index = state.items.findIndex (element => element.item === action.item)
            if (index === -1) {
                state.items.push ({item:action.item, amount: 1})
            }
            else {
                state.items.index.amount++
            }
        },
        removeItem () {},
        toggleCart (state) {
            state.cartVisible = !state.cartVisible
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer