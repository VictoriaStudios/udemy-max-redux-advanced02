import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch = useDispatch()
  const title = props.product.item.name;
  const quantity = props.product.amount
  const price = props.product.item.price
  const total = (quantity * price).toFixed(2)

  const addItemHandler = () => {
    dispatch(cartActions.addItem(props.product.item))
  }

  const removeItemHandler = () => {
    dispatch (cartActions.removeItem (props.product.item))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          {`${total} `}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick = {addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
