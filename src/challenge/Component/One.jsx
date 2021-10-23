//redux-Program
import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {successAction,failureAction} from './Two';
let One=()=>{
      let dispatch=useDispatch();
      let challenge=useSelector((state)=>{
          return state.challenge;
      });
      let successHandler=()=>{
          dispatch (successAction());
      };
      let failureHandler=()=>{
          dispatch(failureAction());
      };
    return(
        <div><hr/>
          <h1>One   :  {challenge.challenge}</h1><hr/>
          
          <button className="btn-success" onClick={successHandler}>Success</button>&nbsp;&nbsp;
          <button className=""onClick={failureHandler}>Failure</button>
        </div>
    );
}
export default One;