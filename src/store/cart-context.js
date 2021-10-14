import React from "react";
const CartContext=React.createContext({
    //default Items 
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{},    

});
export default CartContext;