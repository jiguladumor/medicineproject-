import { call, put, takeEvery,all   } from 'redux-saga/effects'
import { SignUpAPI } from '../Common/SignUpapi';
 
import * as Actiontypes from '../Redux/Actiontypes'
import { emailVerifyAction } from '../Redux/Action/AuthAction';

 
function* Signup(action) {
   try {
      const user = yield call(SignUpAPI, action.payload);
      yield put(emailVerifyAction(user));
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}
 
function*  watchsignup() {
  yield takeEvery("Actiontypes.SIGNUP", Signup);
}

export  function* authSaga() {
    yield all [
        watchsignup()
    ]
}
 

 