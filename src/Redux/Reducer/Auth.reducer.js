

import * as Actiontypes from '../Actiontypes'
const initstate = {
  isLoading: false,
  user: null,
  error: ''


}
export const AuthReducer = (state = initstate, action) => {
  console.log(action.type, action.payload);
  switch (action.type) {
    case Actiontypes.EMAILVARIFY:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: ''


      }

    default:
      return state;

  }
}