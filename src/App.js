import React from'react';
//import { Route } from 'react-router';
import './Asserts/Css/Flip.css';
import { Store } from "./challenge/Component/Store";
import { Provider } from "react-redux";
import One from './challenge/Component/One';

class App extends React.Component{
  render(){
    return <div>
      <Provider store={Store}>
        
          <One/>
      
      </Provider>




</div>
  }
}
export default App;
