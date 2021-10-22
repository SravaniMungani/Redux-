import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {Four} from './Four';
let Store=createStore(Four,composeWithDevTools());
export {Store};
