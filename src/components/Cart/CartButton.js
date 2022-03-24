import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../../store/cartSlice';


const CartButton = (props) => {
  const dispatch = useDispatch()

  const handleCart = () => dispatch(cartActions.toggleCart())

  return (
    <button onClick={handleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
