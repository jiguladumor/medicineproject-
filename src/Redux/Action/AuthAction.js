import  * as Actiontypes from'../Actiontypes'; 
 
export const  signup = (dispatch) => (data) => {
    console.log(data);
    dispatch({type:Actiontypes.SIGNUP,payload:data})
}

export const emailVerifyAction = (dispatch) => (data) =>  {
    dispatch({type:Actiontypes.EMAILVARIFY , payload:data})
}