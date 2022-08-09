import * as Actiontypes from '../Actiontypes';

export const SetAlert = (values) => (dispatch) => {
    console.log(values);
    dispatch({ type: Actiontypes.SET_ALERT, payload: values })
}

export const RestateAlert = () => (dispatch) => {
    dispatch({ type: Actiontypes.RESET_ALERT })
}