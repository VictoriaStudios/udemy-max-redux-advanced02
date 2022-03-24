import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector (state => state.cart.items)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems.map ((entry, index) => (
        <ul key={`cartitem ${index}`}>
          <CartItem
          item={{ title: entry.item.name, quantity: entry.amount, price: entry.item.price }}
        />
        </ul>
      ))}
    </Card>
  );
};

export default Cart;
