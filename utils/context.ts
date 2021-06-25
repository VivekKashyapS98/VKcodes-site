import { createContext } from "react";

const defaultContext = {
  toggleTheme: () => 0,
};

export const ThemeContext = createContext<any>(defaultContext);
