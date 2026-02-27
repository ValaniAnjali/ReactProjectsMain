//without reduxToolkit
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import counterReducer from './counter';
import authReducer from './auth';


//we are preparing slice of our global state.






// here we pass configuration object there we pass configuration property (we set reducer property)
const store=configureStore({
    // reducer:counterSlice.reducer  if only one counter slice and reducer is there... otherwise we can use map of reducers
    reducer:{counter:counterReducer,auth:authReducer}
});
export default store;
