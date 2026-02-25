import { createContext,useState } from "react";


export const FoodContext=createContext(
    {
        cartItems:[],
        addToCart:()=>{},
        increaseQuantity:()=>{},
        decreaseQuantity:()=>{}

    }
);
export default function FoodContextProvider({children}){
    let [cartItems,setCartItems]=useState([]);   
    let increaseQuantity=(id)=>{
        setCartItems(
            (prevItems)=>{return prevItems.map((item)=>{
               return item.id===id?{
                    ...item,quantity:item.quantity+1,
                }:item
            });}
        )
        
    } 
    let decreaseQuantity=(id)=>{
        setCartItems(
            (prevItems)=>{
                return prevItems.map((item)=>{
                    return (item.id===id)?{
                        ...item,quantity:item.quantity-1,
                    }:item
                }).filter(item=>item.quantity>0)
            }
        )
    }
    let addToCart=(product)=>{
        setCartItems((prevItems)=>{
            const existingItem=prevItems.find(
                (item)=>item.id===product.id
            )
             if(existingItem){
            return prevItems.map((item)=>{
               return item.id===product.id?{
                    ...item
                }:item
            });
        }

        return[...prevItems,{...product,quantity:1}];
        
        })
       console.log(cartItems)
    }
    const contextValue={
        cartItems,addToCart,increaseQuantity,decreaseQuantity
    }

    return(
        <FoodContext.Provider value={contextValue}>
            {children}
        </FoodContext.Provider>
    )
}