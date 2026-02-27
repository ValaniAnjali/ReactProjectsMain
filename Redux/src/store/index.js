//without reduxToolkit
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createStore } from 'redux';

const initialState={counter:0,showCounter:true};

//we are preparing slice of our global state.
const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter+=action.payload;
        },
        toggleCounter(state){
            state.showCounter=!state.showCounter;
        }
    }
});

const initialAuthState={
    isAuthenticated:false
};

const authSlice=createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated=true;
        },
        logout(state){
            state.isAuthenticated=false;
        }
    }
})

counterSlice.actions.toggleCounter

// here we pass configuration object there we pass configuration property (we set reducer property)
const store=configureStore({
    // reducer:counterSlice.reducer  if only one counter slice and reducer is there... otherwise we can use map of reducers
    reducer:{counter:counterSlice.reducer,auth:authSlice.reducer}
});
export default store;
export const counterActions=counterSlice.actions;
export const authActions=authSlice.actions;