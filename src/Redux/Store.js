import { rootReducer } from './Reducer/Index'; 
import { createStore , applyMiddleware  } from 'redux'
import thunk from 'redux-thunk' 
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from '../Saga/rootsaga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const sagaMiddleware = createSagaMiddleware()  

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const middleware =[
  thunk,
  sagaMiddleware
]
const persistedReducer = persistReducer(persistConfig, rootReducer)
const configure = () => {
  console.log("configure");
     let store = createStore (persistedReducer , applyMiddleware(...middleware) )
   

       

       sagaMiddleware.run(rootSaga)
       return store ;  
 }
 export const store = configure();
  export let persistor = persistStore(store)

  // export default store;
 