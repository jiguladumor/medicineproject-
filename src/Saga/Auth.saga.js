import { call, put, takeEvery,all   } from 'redux-saga/effects'
import { SignUpAPI } from '../Common/SignUpapi';
 
import * as Actiontypes from '../Redux/Actiontypes'
import { emailVerifyAction } from '../Redux/Action/AuthAction';
import { RestateAlert, SetAlert } from '../Redux/Action/alertAction';

 
function* Signup(action) {
   try {
       
      const user = yield call(SignUpAPI, action.payload);
      console.log(user.payload);
       yield put (SetAlert({text:user.payload , color:"success"}));
      yield put(emailVerifyAction(user));
      
   } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
      yield put (RestateAlert({text:e.payload , color:"error"}));
      console.log(e.payload);
   }
}
function*  watchsignup() {
  yield takeEvery(Actiontypes.SIGNUP, Signup);
}

export  function* authSaga() {
    yield all [
        watchsignup()
    ]
}
 

 