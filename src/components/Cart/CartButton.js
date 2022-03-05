import { useDispatch } from "react-redux";
import uiSlice from "../../store/ui-slice";

// import uiActions from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartHandler = () => {
    dispatch(uiSlice.actions.toggle());
  };
  return (
    <button onClick={cartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
