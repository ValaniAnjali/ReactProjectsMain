import axios from "axios";
import { createContext, useState, useEffect,useMemo } from "react";

export const FoodContext = createContext();

const CART_URL = "http://localhost:3000/cart";


export default function FoodContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
       

    

 
    const fetchCart = async () => {
        const res = await axios.get(CART_URL);
        setCartItems(res.data);
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const addToCart = async (product) => {
        const existing = cartItems.find(i => i.id === product.id);
        if (existing) return;

        await axios.post(CART_URL, { ...product, quantity: 1 });
        fetchCart();
    };

    const increaseQuantity = async (id) => {
        const item = cartItems.find(i => i.id === id);
        if (!item) return;

        await axios.patch(`${CART_URL}/${id}`, {
            quantity: item.quantity + 1
        });

        fetchCart(); 
    };

    const decreaseQuantity = async (id) => {
        const item = cartItems.find(i => i.id === id);
        if (!item) return;

        if (item.quantity === 1) {
            await axios.delete(`${CART_URL}/${id}`);
        } else {
            await axios.patch(`${CART_URL}/${id}`, {
                quantity: item.quantity - 1
            });
        }

        fetchCart(); 
    };


     const contextValue = useMemo(() => {
    return {
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity
    };
}, [cartItems]);

    return (


        <FoodContext.Provider value={
            contextValue
        }>
            {children}
        </FoodContext.Provider>
    );
}
