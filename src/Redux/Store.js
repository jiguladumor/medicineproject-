import { rootReducer } from './Reducer/Index'; 
import { createStore , applyMiddleware  } from 'redux'
import thunk from 'redux-thunk' 
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../Saga/rootsaga';


const sagaMiddleware = createSagaMiddleware() 

const middleware =[
  thunk,
  sagaMiddleware
]
export const configure = () => {
     let store = createStore (rootReducer , applyMiddleware(...middleware) )
       return store ;  

       sagaMiddleware.run(rootSaga)
 }