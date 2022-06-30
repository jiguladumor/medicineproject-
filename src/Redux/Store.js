import { rootReducer } from './Reducer/Index'; 
import { createStore , applyMiddleware  } from 'redux'
import thunk from 'redux-thunk' 
export const configure = () => {
     let store = createStore (rootReducer , applyMiddleware(thunk) )
       return store ;  


 }