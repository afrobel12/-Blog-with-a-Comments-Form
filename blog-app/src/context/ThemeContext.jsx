"use client"

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

const getFromLocalStorage = () => {
    if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme")
    return value || "dark"
}
}

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState( () => {
        return getFromLocalStorage()
    })
    const toogle = () => {
        setTheme(theme ==="dark" ? "light" : "dark")
    }

    useEffect(() => {
      localStorage.setItem("theme", toogle)
    },[theme])
    return (
    <ThemeContext.Provider value={{theme, toogle}}>{children}</ThemeContext.Provider>
    )
}