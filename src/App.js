import Header from "./components/Layout/Header";
import React, {useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Carts/Cart";
import CartProvider from "./store/CartPRovider";
function App() {

  const [cartShow,setCartShow]=useState(false);

  function showCart(){
    setCartShow(true);
  }

  function hideCart(){
    setCartShow(false);
  }


  return (
    <CartProvider>
      {cartShow&&<Cart onClose={hideCart}/>}
      <Header onclick={showCart}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
