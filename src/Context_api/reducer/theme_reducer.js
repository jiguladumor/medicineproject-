
// import * as  Actiontypes from './Actiontypes';
import * as Actiontypes from'./Actiontypes';


// export const themeReducer = (state, action) => {
//     switch (action.type) {
//         case Actiontypes.TOGGLE_THEME:
//             return {
//                 ...state,
//                 theme: action.payload

//             }

//         default:
//             return state;
//     }
// }
// STEP:2
export const themeReducer = (state,action) => {
     switch (action.type){
        case Actiontypes.TOGGLE_THEME :
            return {
                ...state,
                theme:action.payload
            }
            default :
             return state;
     }

}