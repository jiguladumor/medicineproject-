import * as Actiontypes from '../Actiontypes';

export const signupAction = (values) => (dispatch) => {
    console.log(values);
    dispatch({ type: Actiontypes.SIGNUP, payload: values })

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

 

