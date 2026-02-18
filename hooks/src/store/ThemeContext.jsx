import { createContext, useState } from "react";

 export const ThemeContext=createContext(
    {
        theme:'light',
        changeTheme:()=>{}
    }
)
export default function ThemeContextProvider({children}){
     
    return <ThemeContext.Provider value={{theme,changeTheme}}>{children}</ThemeContext.Provider>
}