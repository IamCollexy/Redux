import classes from './CartButton.module.css';
import { uiActions } from '../../Store/ui-slice';
import {  useDispatch, useSelector} from 'react-redux';

const CartButton = (props) => {

 const dispatch = useDispatch();
 const cartQuantity = useSelector(state => state.cart.totalQuantity);
 

 const toggleCartFunction = () => {
dispatch(uiActions.toggle());
 };
  
  return (
    <button className={classes.button} onClick={toggleCartFunction}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
