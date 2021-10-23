import { success,failure } from "./Two";
let initialState={
    challenge:"Hi sir",
};
let Three=(state=initialState,action)=>{
    switch(action.type){
        case success:return{challenge:"Good practice"}
        case failure:return{challenge:"Thank you Sir"}
        default  :return state;
    }
};
export {Three};