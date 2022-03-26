import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  setCart } from './utilities/databaseHandler';
import { fetchCartData } from './store/cartSlice';


let firstRun = true

function App() {
  const cartVisible = useSelector (state => state.cart.cartVisible)
  const cart = useSelector (state => state.cart)
  const dispatch = useDispatch()

  useEffect (() => {
    dispatch(fetchCartData())
  },[])

  useEffect (() => {
    if (!firstRun) setCart (cart)
    else firstRun = false
  },[cart])



  return (
    <Layout>
      {cartVisible? (<Cart/>):('')}
      <Products />
    </Layout>
  );
}

export default App;
