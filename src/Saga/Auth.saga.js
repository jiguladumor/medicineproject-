import { call, put, takeEvery, all } from 'redux-saga/effects'
import { SignUpAPI, LoginApi, LogoutApi, SigninGoogleApi, ResetApi } from '../Common/SignUpapi';

import * as Actiontypes from '../Redux/Actiontypes'
import { emailVerifyAction, Loggieuser, Loggoutuser, ResetPassword } from '../Redux/Action/AuthAction';
import { RestateAlert, SetAlert } from '../Redux/Action/alertAction';
import { history } from '../history';

function* Signup(action) {
   try {
      console.log("Signup");
      const user = yield call(SignUpAPI, action.payload);
      // console.log(user.payload);
      yield put(SetAlert({ text: user.payload, color: "success" }));
      //   yield put(emailVerifyAction(user));

   } catch (e) {

      yield put(SetAlert({ text: e.payload, color: "error" }));
      //  yield put({type: "USER_FETCH_FAILED", message: e.message});
      // console.log(e);
   }
}
function* loginup(action) {
   try {
      // console.log("Signup"); //
      const user = yield call(LoginApi, action.payload);
      //   console.log(user);
      yield put(Loggieuser(user.payload));
      history.push("/");
      yield put(SetAlert({ text: "login successfull", color: "success" }));
   } catch (e) {
      yield put(SetAlert({ text: e.payload, color: "error" }));
      history.push("/");
   }
}

function* logout(action) {
   try {
      const user = yield call(LogoutApi);
      yield put(Loggoutuser());
      history.push("/")
      yield put(SetAlert({ text: "logout successfull", color: "success" }));
   }
   catch (e) {
      console.log(e);
      yield put(SetAlert({ text: e.payload, color: "error" }));

   }
}
// google sign in 

function* Signgoogle(action) {
   try {
      const user = yield call(SigninGoogleApi);
      yield put(Loggoutuser())
      history.push("/");
      yield put(SetAlert({ text: "login successfull", color: "success" }));
   }
   catch (e) {
      console.log(e);
      yield put(SetAlert({ text: "login successfull", color: "success" }));

   }
}

function* ResetIn(action ) {
   try {
      const user = yield call(ResetApi, action.payload); 
      yield put(SetAlert({ text: "plz check email id ", color: "error" }));
      console.log(user);


   }
   catch (e) {
      yield put(SetAlert({ text: e.payload, color: "error" }));
      console.log(e);

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

function* loggoutwatchup() {
   yield takeEvery(Actiontypes.LOGGOUT, logout)
}

// sign in google 

function* Signingoogle() {
   console.log("Signingoogle");
   yield takeEvery(Actiontypes.SIGNIN_GOOGLE, Signgoogle);
}

function* ForgetPassword() {
   yield takeEvery(Actiontypes.FORGET_PASSWORD, ResetIn)
}


export function* authSaga() {
   console.log("authSaga");
   yield all([
      watchsignup(),
      Loginwatchup(),
      loggoutwatchup(),
      Signingoogle(),
      ForgetPassword()
   ])


}


