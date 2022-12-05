import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {counter : 0 , visible : true}

// creating sa alice of the current store
const counterSlice = createSlice({
    name : 'counter' ,
    initialState : initialCounterState ,
    reducers : {
        increment(state){ state.counter++} ,
        decrement(state){ state.counter--} ,
        increase(state , action){state.counter = state.counter + action.payload} ,
        toggleCounter(state){ state.visible = !state.visible}
    }
});

export default counterSlice;
export const counterActions = counterSlice.actions;