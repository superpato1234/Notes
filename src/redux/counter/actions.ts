import {state,action} from './types'
export function INCREMENT(state:state) {
    state.value+=1
} 

export function DECREMENT(state:state){
    state.value-=1
}

export function INCREMENT_BY_AMOUNT(state:state,action:action){
    state.value+=action.payload;
}