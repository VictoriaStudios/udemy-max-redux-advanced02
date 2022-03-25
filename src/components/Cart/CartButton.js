import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../../store/cartSlice';
import { useEffect, useState } from 'react';


const CartButton = (props) => {

  const dispatch = useDispatch()
  const handleCart = () => dispatch(cartActions.toggleCart())
  const cartItems = useSelector (state => state.cart.items)
  const [totalItems, setTotalItems] = useState (0)

  useEffect (() => {
    let totalAmount = 0
    cartItems.forEach ((item) => {
      totalAmount += item.amount
    })
    setTotalItems (totalAmount)

  }, [cartItems])

  return (
    <button onClick={handleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
