  
  import { combineReducers } from "redux";
import { AlertReducer } from "./alert.reducer";
import { AuthReducer } from "./Auth.reducer";
import { counterReducer } from "./Counter.reducer";


 export const rootReducer = combineReducers({
     counter:counterReducer,
     auth:AuthReducer,
     alert:AlertReducer

 })