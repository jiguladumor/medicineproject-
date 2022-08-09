import * as Actiontypes from '../Actiontypes';

export const signupAction = (values) => (dispatch) => {
    console.log(values);
    dispatch({ type: Actiontypes.SIGNUP, payload: values })

}

export const emailVerifyAction = (values) => (dispatch) => {

    dispatch({ type: Actiontypes.EMAILVARIFY, payload: values })
}

