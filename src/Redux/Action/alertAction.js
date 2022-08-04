import * as Actiontypes from '../Actiontypes';

export const SetAlert = (dispatch) => (data) => {
    dispatch({ type: Actiontypes.SET_ALERT, payload: data })
}

export const RestateAlert = (dispatch) => () => {
    dispatch({ type: Actiontypes.RESET_ALERT })
}