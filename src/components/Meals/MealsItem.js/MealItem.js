import "./MealItem.css";
import MealItemForm from "./MealItemForm";
import {useContext} from 'react';
import CartContext from "../../../store/cart-context";

function MealItem(props) {
    const price=props.price.toFixed(2);

  const ctx=useContext(CartContext)

  function addToCartHandler(amount){
    ctx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price,
    })
  }

  return (
    <li className="meal">
      <div>
          <h3>{props.name}</h3>
          <div className="description ">{props.desc}</div>
          <div className="price">{'$ ' + price}</div>
      </div>
      <div>
          <MealItemForm onAddCart={addToCartHandler}/>
      </div>
    </li>
  );
}
export default MealItem;
