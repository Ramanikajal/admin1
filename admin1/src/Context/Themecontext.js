
import { ActionTypes } from "./Actiontype";
import { createContext } from "react";

const Themecontext = createContext()
const initval = {
    Theme: 'light'
}
export const ThemeProvider = ({ Children }) => {

    const [state, dispatch] = useReducer(ThemeReducer, initval);

    const toogel_theme = (Theme) => {
        const newTheme = Theme === 'light' ? 'derk' : "light";
        dispatch({ type: ActionTypes.TOOGLE_THEME, payload: newTheme });
    }


return(
    <Themecontext.Provider
    value ={{
        ...state,
        toogel_theme
    }}>
    {Children}
</Themecontext.Provider>
)
}
export default Themecontext
