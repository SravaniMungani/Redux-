import React from'react';
//import { Route } from 'react-router';
import './Asserts/Css/Flip.css';
import {store} from './redux/store';
import { Provider } from "react-redux";
import Product  from './component/Product';

class App extends React.Component{
  render(){
    return <div>
      <Provider store={store}>
        
          <Product/>
      
      </Provider>




</div>
  }
}
export default App;
