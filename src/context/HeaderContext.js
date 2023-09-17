import React,{ createContext } from "react"

const HeaderContext = createContext()

function HeaderContextProvider(props) {
    return (
        <HeaderContext.Provider value={props.items}>
            {props.children}
        </HeaderContext.Provider>
    )
}

export { HeaderContext, HeaderContextProvider }
