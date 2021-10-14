import Modal from "../UI/Modal";
import "./Cart.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const ctx = useContext(CartContext);
  const totalAmount = ctx.totalAmount.toFixed(2);
  const hasItem = ctx.items.length > 0;

  function cartItemRemove(id){}
  function cartItemAdd(item){}

  const cartItems = (
    <ul className="cart-items">
      {ctx.items.map((items) => (
        <CartItem
          key={items.id}
          name={items.name}
          amount={items.amount}
          price={items.price}
          onRemove={cartItemRemove.bind(items.id)}
          onAdd={cartItemAdd.bind(items)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{"$ " + totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className="button">Order</button>}
      </div>
    </Modal>
  );
}
export default Cart;
