

import * as actiontypes from '../Actiontypes'
  const initstate = {
    counter:0 
  }
 export const counterReducer = ( state= initstate ,action) => {
       switch( action.type) {
              case actiontypes.INCREMENTCOUNTER : 
                return{
                  ...state,
                    counter:state.counter + 1 
                    
                } 

                case actiontypes.DECREMENTCOUNTER : 
                return{
                  ...state,
                    counter:state.counter - 1 
                    
                } 

                default :
                 return state;
                
       }
 }