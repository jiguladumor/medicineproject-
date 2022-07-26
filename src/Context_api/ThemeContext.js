import { light } from "@mui/material/styles/createPalette";
import { Children, useReducer } from "react";
import { createContext } from "react";
import { toggle_theme } from "./reducer/theme_reducer";
import * as  Actiontypes from'./reducer/Actiontypes';


const themeContext = createContext();

const initval ={
    theme:light
}

export const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(toggle_theme, initval);



const toggle_theme = (theme) => {
    const newTheme =theme==='light' ? 'dark' : 'light';
    dispatch({type:Actiontypes.TOGGLE_THEME,payload:newTheme}) ; 
}




return(
 <> 
 <themeContext.Provider 
   value={{
        ...state,
        toggle_theme

    }}
>
     {children}

</themeContext.Provider>
 </>
);
}

export default themeContext;