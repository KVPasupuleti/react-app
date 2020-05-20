import React from 'react'

export const themeObject = {
    light: {
    color: "black",
    background: "white"
    },
    dark: {
    color: "white",
    background: "black"
    }
}

export const IndexThemeContext = React.createContext({
    theme: themeObject.dark,
    changeContextValue: () => {},
})

export const IndexUserContext = React.createContext({
    name: "Kaywee"
})