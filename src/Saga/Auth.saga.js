import { call, put, takeEvery, all } from 'redux-saga/effects'
import { SignUpAPI ,LoginApi} from '../Common/SignUpapi';

import * as Actiontypes from '../Redux/Actiontypes'
import { emailVerifyAction, Loggieuser } from '../Redux/Action/AuthAction';
import { RestateAlert, SetAlert } from '../Redux/Action/alertAction';
import { history } from '../History';


function* Signup(action) {
   try {
      console.log("Signup");
      const user = yield call(SignUpAPI, action.payload);
      console.log(user.payload);
        yield put(SetAlert({ text: user.payload, color: "success" }));
      //   yield put(emailVerifyAction(user));

   } catch (e) {
      
       yield put(SetAlert({ text: e.payload, color: "error" }));
      //  yield put({type: "USER_FETCH_FAILED", message: e.message});
      console.log(e);
   }
}
function* loginup(action) {
   try {
      // console.log("Signup"); //
      const user = yield call(LoginApi, action.payload);
        console.log(user);
        yield put(Loggieuser(user.payload));
      
       yield put(SetAlert({ text: "login successfull", color: "success" }));
       history.push("/");
          

   } catch (e) {
      
        yield put(SetAlert({ text: e.payload, color: "error" }));
      //  yield put({type: "USER_FETCH_FAILED", message: e.message});
      console.log(e.payload);
   }
}



//  login
function* watchsignup() {
   console.log("watchsignup");
   yield takeEvery(Actiontypes.SIGNUP, Signup);
}

// login process

function* Loginwatchup() {
   console.log("watchsignup");
   yield takeEvery(Actiontypes.LOGIN_USER, loginup);
}


export function* authSaga() {
   console.log("authSaga");
   yield all([
      watchsignup(),
      Loginwatchup()
   ])


}


