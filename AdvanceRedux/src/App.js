import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { uiActions } from './components/store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial=true;

function App() {
  const dispatch=useDispatch();
  const showCart=useSelector(state=>state.ui.cartIsVisible);
  const cart=useSelector(state=>state.cart);
  const notification=useSelector(state=>state.ui.notification);

  useEffect(()=>{
    const sendCartData=async()=>{
      dispatch(uiActions.showNotification({
        status:'pending',
        title:'Sending...',
        messsage:'Sending cart data'
      }))
      const response=await fetch('https://reduxdemo-e4830-default-rtdb.firebaseio.com/cart.json',
      {
        method:'PUT',
        body:JSON.stringify(cart),
        //put will override existing cart data and replaces with new one
      }
    );

    if(!response.ok){
      throw new Error('Sending cart data failed.')
    }
    
    dispatch(uiActions.showNotification({
        status:'Success',
        title:'Success...',
        messsage:'Send cart data successfully'
      }))
  
    }

   
if(isInitial){
  isInitial=false;
  return;
}
    
      sendCartData().catch((error)=>{
        dispatch(uiActions.showNotification({
        status:'error',
        title:'error...',
        messsage:'Send cart data error'
      }))
      })

  },[cart,dispatch]);

  

  return (
    <>
    {notification && <Notification
        status={notification.status}
        title={notification.title}
        messsage={notification.messsage}
    />}
    <Layout>
      {showCart && <Cart/>}
      <Products />
    </Layout>
    </>
  );
}

export default App;
