import axios from "axios";
import { createContext,useState,useEffect } from "react";
//as setState and useEffect both we are using and data is comming from bakcend so this file was not working means like stale state, uncertain value etc was comming

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
    useEffect(()=>{
        const fetchCart=async()=>{
            const res=await axios.get('http://localhost:3000/cart');
            setCartItems(res.data);
        };
        fetchCart();
    },[]);   
    let increaseQuantity=async(id)=>{
        const item=cartItems.find(i=>i.id===id);
        const updatedQuantity=item.quantity+1;
        await axios.patch(`http://localhost:3000/cart/${id}`,{
            quantity:updatedQuantity
        })
        fetchCart();
        setCartItems(
            (prevItems)=>{return prevItems.map((item)=>{
               return item.id===id?{
                    ...item,quantity:updatedQuantity
                }:item
            });}
        )
        
    } 
    let decreaseQuantity=async(id)=>{
        const item=cartItems.find(i=>i.id===id);
        if(item.quantity===1){
            await axios.delete(`http://localhost:3000/cart/${id}`);
            setCartItems(items=>items.filter(i=>i.id!==id));
            return;
        }
        await axios.patch(`http://localhost:3000/cart/${id}`,{
            quantity:item.quantity-1
        })
        setCartItems(prev=>{
            return prev.map(i=>{
                return i.id===id?{...i,quantity:i.quantity-1}:i
            })
        })
    }
    let addToCart=async(product)=>{

        try{
            const existingItem=cartItems.find(
                (item)=>item.id===product.id
            )
             if(existingItem){
            return;
        }
        const res=await axios.post("http://localhost:3000/cart",{
            ...product,quantity:1
        });

        setCartItems(prevItems=>
            [...prevItems,res.data]
        )

        }catch(err){
            console.log(err);
        }


        
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