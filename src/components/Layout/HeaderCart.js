import "./HeaderCart.css";
import CartIcon from "../Carts/CartIcon";
import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
function HeaderCart(props) {
  const ctx = useContext(CartContext);

  const numberOfItems = ctx.items.reduce((currentNo, items) => {
    return currentNo + items.amount;
  }, 0);
  
  return (
    <button onClick={props.onclick} className="button">
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className="badge">{numberOfItems}</span>
    </button>
  );
}
export default HeaderCart;
