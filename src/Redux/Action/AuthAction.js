import  * as actiontypes from'../Actiontypes'; 
 
export const  signupAction= (dispatch) => (data) => {
    // console.log(data);
    dispatch({type:actiontypes.SIGNUP,payload:data})
}

export const emailVerifyAction = (dispatch) => (data) =>  {
    dispatch({type:actiontypes.EMAILVARIFY , payload:data})
}

