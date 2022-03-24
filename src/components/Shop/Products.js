import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { shopItems } from '../../shopitems/shopitems';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          item={shopItems.testItem}
        />
      </ul>
    </section>
  );
};

export default Products;
