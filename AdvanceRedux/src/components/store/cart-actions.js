import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
export const fetchCartData=()=>{
    return async dispatch=>{
        const fetchData=async()=>{
            const response=await fetch('https://reduxdemo-e4830-default-rtdb.firebaseio.com/cart.json');
            if(!response.ok){
                throw new Error('Could not fetch cart data1')
            }
            const data=await response.json();
            return data;
        }

        try{
           const cartData=await fetchData();
            dispatch(cartActions.replaceCart({
            items: cartData?.items || [],
            totalQuantity: cartData?.totalQuantity || 0
            }));

        }catch(err){
             dispatch(uiActions.showNotification({
            status:'error',
            title:'error ...',
            messsage:'Fetch cart data error'
      }))
        }
        
    };
}
export const sendCartData=(cart)=>{
    return async(dispatch)=>{
        
             dispatch(uiActions.showNotification({
                    status:'pending',
                    title:'Sending...',
                    messsage:'Sending cart data'
                  }));

        const sendRequest=async()=>{
        const response=await fetch('https://reduxdemo-e4830-default-rtdb.firebaseio.com/cart.json',
            {
                method:'PUT',
                body:JSON.stringify({items:cart.items,
                    totalQuantity:cart.totalQuantity,
                }),
                //put will override existing cart data and replaces with new one
            }
            );

                if(!response.ok){
                    throw new Error('Sending cart data failed.');
                }
        };

        try{
            await sendRequest();
            
                dispatch(uiActions.showNotification({
                status:'Success',
                title:'Success...',
                messsage:'Send cart data successfully'
            }))
        }catch(err){
            dispatch(uiActions.showNotification({
            status:'error',
            title:'error...',
            messsage:'Send cart data error'
      }))
        }
                  

         
    }

};