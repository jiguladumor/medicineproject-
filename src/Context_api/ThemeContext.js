import { light } from "@mui/material/styles/createPalette";
import { Children, useReducer } from "react";
import { createContext } from "react";
import { themeReducer, toggle_theme } from "./reducer/theme_reducer";
import * as  Actiontypes from './reducer/Actiontypes';

 
 
// import { useReducer } from "react";
// import { createContext } from "react";
// import themeReducer from"./reducer/theme_reducer";
// import * as Actiontypes from'./reducer/Actiontypes';


const ThemeContext = createContext();

const initval = {
    theme: 'light'
}

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initval);



    const toggle_theme = (theme) => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        dispatch({ type: Actiontypes.TOGGLE_THEME, payload: newTheme });
    }
    return (
        <>
            <ThemeContext.Provider
                value={{
                    ...state,
                    toggle_theme

                }}
            >
                {children}

            </ThemeContext.Provider>
        </>
    );
}

export default ThemeContext;


