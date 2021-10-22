let success="success";
let failure="failure";
let successAction=()=>{
    return{type:success}
};
let failureAction=()=>{
    return{type:failure}
};
export {success,failure,successAction,failureAction};