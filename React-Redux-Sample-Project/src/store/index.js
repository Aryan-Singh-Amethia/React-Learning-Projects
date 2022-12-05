import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import authSlice from './auth';


// const counterReducer = (state = initialState, action) =>{

//     if(action.type === 'increment'){
//         return { counter : state.counter + 1 , visible : state.visible}
//     }else if(action.type === 'decrement'){
//         return { counter : state.counter - 1 , visible : state.visible}
//     }else if(action.type === 'increase'){
//         return {counter : state.counter + action.amount , visible : state.visible}
//     }else if(action.type === 'toggle'){
//         return { counter : state.counter , visible : !state.visible}
//     }else{
//         return state;
//     }

// };

const store = configureStore({ reducer :{
    counter : counterSlice.reducer ,auth : authSlice.reducer
}});

export default store;

