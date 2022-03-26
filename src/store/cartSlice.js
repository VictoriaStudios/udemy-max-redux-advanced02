import { createSlice } from "@reduxjs/toolkit";
import { getCart } from "../utilities/databaseHandler";

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
        },
        setCart (state, action) {
            state.cartVisible = action.payload.cartVisible
            state.items = action.payload.items
        }
    }
})

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
               const data = await getCart()
                return data
        }
        try {
            const cartData = await fetchData()
            dispatch(cartActions.setCart({
                ...cartData,
                items:cartData.items || []
            }))
        } catch (error) {
            console.log (error)
        }
    }
}


export const cartActions = cartSlice.actions

export default cartSlice.reducer