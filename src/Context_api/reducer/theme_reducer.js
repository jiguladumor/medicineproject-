
import * as  Actiontypes from'./Actiontypes';


export const toggle_theme = (state,action) => {
    switch(action.type){

         case Actiontypes.TOGGLE_THEME :
            return{
                ...state,
                theme:action.payload

            }


        default:
    }
}