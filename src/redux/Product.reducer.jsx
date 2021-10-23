import {INCR,DECR}from "./Product.action";
let initialstate={
    productname:"vivo",
    price:10000,
    image:"https://rukminim1.flixcart.com/image/312/312/kksmikw0/mobile/x/e/g/y20g-v2037-vivo-original-imagy2ht5qrgn3zx.jpeg?q=70",
    qty:1,}
let ProductReducer=(state=initialstate,action)=>{
    switch(action.type){
        case INCR:
        return  { ...state, qty: state.qty + 1 };
        case DECR:
        return { ...state, qty: state.qty - 1 };
        default:
        return state;
    }
}
export {ProductReducer};