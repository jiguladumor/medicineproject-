import { rootReducer } from './Reducer/Index'; 
import { createStore , applyMiddleware  } from 'redux'
import thunk from 'redux-thunk' 
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from '../Saga/rootsaga';


const sagaMiddleware = createSagaMiddleware() 

const middleware =[
  thunk,
  sagaMiddleware
]
const configure = () => {
  console.log("configure");
     let store = createStore (rootReducer , applyMiddleware(...middleware) )
       

       sagaMiddleware.run(rootSaga)
       return store ;  
 }
 export const store = configure();

  // export default store;
 