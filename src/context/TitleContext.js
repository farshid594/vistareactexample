import React, { createContext, useState } from 'react'

const TitleContext = createContext({
    title: "",
    setTitle: () => { }
})
export { TitleContext }

function TitleContextProvider({ children }) {
    const [title, setTitle] = useState("react")

    return (
        <TitleContext.Provider
            value={{
                title: title,
                setTitle: setTitle
            }}
        >
            {children}
        </TitleContext.Provider>
    )

}
export default TitleContextProvider