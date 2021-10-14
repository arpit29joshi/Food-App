import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartItem = {
  itemList: [],
  totalAmount: 0,
};

function CartReducer(state, action) {
  if (action.type === "ADD") {
    const existingItemIndex = state.itemList.findIndex(
      (item) => item.id === action.dataItem.id
    );
    const existingCartItem=state.itemList[existingItemIndex];
    let updatedItems;
    if(existingCartItem){
     const updatedItem={
        ...existingCartItem,
        amount:existingCartItem.amount+action+action.dataItem.amount,
      };
      updatedItems=[...state.itemList];
      updatedItems[existingCartItem]=updatedItem;
    }
    else{
       updatedItems = state.itemList.concat(action.dataItem);
    }

    const updateAmount =
      state.totalAmount + action.dataItem.price * action.dataItem.amount;
    return {
      itemList: updatedItems,
      totalAmount: updateAmount,
    };
  } else {
    console.log("noooo");
  }
  return defaultCartItem;
}

function CartProvider(props) {
  const [cartState, dispatchCart] = useReducer(CartReducer, defaultCartItem);
  function addItemToCart(item) {
    dispatchCart({ type: "ADD", dataItem: item });
  }

  function removeItemToCart(id) {
    dispatchCart({ type: "REMOVE", dataId: id });
  }

  const cartContext = {
    items: cartState.itemList,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemToCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartProvider;
