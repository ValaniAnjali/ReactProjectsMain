import { createContext, useState } from "react";
import {products} from '../db.json'

export const FoodContext=createContext(
    {
        name:'',
        price:'',
        quantity:1,
    }
);
export default function FoodContextProvider({children}){
    let [cartItems,setCartItems]=useState([]);
    let addToCart=(product)=>{
        setCartItems((prevItems)=>{
            const existingItem=prevItems.find(
                (item)=>item.id===product.id
            )
        })
        if(existingItem){
            return prevItems.map((item)=>{
                item.id===product.id?{
                    ...item,quantity:item.quantity+1
                }:item
            });
        }
    }
    const contextValue={
        cartItems,addToCart
    }

    return(
        <FoodContext.Provider value={contextValue}>
            {children}
        </FoodContext.Provider>
    )
}