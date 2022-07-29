

import * as actiontypes from '../Actiontypes'
const initstate = {
    isLoading:false,
    user:null,
    error:''

   
}
export const AuthReducer = ( state= initstate ,action) => {
     switch( action.type) {
            case actiontypes.SIGNUP : 
              return{
                ...state,
                  
                  
              } 

              case actiontypes.EMAILVARIFY : 
              return{
                ...state,
                isLoading:false,
                user:null,
                error:''
                  
                  
              } 

              default :
               return state;
              
     }
}