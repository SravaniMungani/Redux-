import { combineReducers } from "redux";
import {ProductReducer} from "./Product.reducer";
let rootReducer=combineReducers({Product:ProductReducer});
export {rootReducer};