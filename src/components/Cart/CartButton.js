import { useDispatch, useSelector } from "react-redux";
import uiSlice from "../../store/ui-slice";

// import uiActions from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const totalItems = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const cartHandler = () => {
    dispatch(uiSlice.actions.toggle());
  };
  return (
    <button onClick={cartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
