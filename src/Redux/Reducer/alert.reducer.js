import * as actiontypes from '../Actiontypes'
const initstate = {
    text:'',
    color:''
   
}
export const AlertReducer = ( state= initstate ,action) => {
  console.log(action.type ,action.payload);
    // console.log(actiontypes.payload);
    console.log(action.type);
     switch( action.type) {
            case actiontypes.SET_ALERT : 
              return{
                ...state,
                text:action.payload.text,
                color:action.payload.color
              } 

              case actiontypes.RESET_ALERT : 
              return{
                ...state,
              } 

              default :
               return state;
              
     }
}