import * as Actiontypes from '../Actiontypes';
 


// sign in processs
export const signupAction = (values) => (dispatch) => {
    console.log(values);
    dispatch({ type: Actiontypes.SIGNUP, payload: values })

} 

// sign-in google

export const Signin_Google = () => (dispatch) => {
    dispatch({type : Actiontypes.SIGNIN_GOOGLE})
 
}

export const emailVerifyAction = (values) => (dispatch) => {

    dispatch({ type: Actiontypes.EMAILVARIFY, payload: values })
}

// login user
export const LoginAction = (values) => (dispatch) => {
    dispatch({type:Actiontypes.LOGIN_USER,payload:values})
}


export const Loggieuser = (values) =>(dispatch) => { 
    dispatch({type:Actiontypes.SIGNEED_USER,payload:values})
}

 
// logout prosess

export const Loggout = () =>(dispatch) => { 
    dispatch({type:Actiontypes.LOGGOUT })
}

  export const Loggoutuser = () => (dispatch) => {
          dispatch({type:Actiontypes.LOGGOUTUSER})
  }



//   reset password 

export const ResetPassword = (values) => (dispatch) => {
    dispatch({
        type:Actiontypes.FORGET_PASSWORD
       ,payload:values
    
    })
}