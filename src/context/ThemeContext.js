import { createContext, useContext } from "react";

const ThemeContext = createContext({
    mode: 'light',
    setMode: () => { },
});

export default ThemeContext;

export const useThemeContext = () => useContext(ThemeContext);
