import React, { createContext, useState } from 'react'
// import { } from '../../Components/KeyChainItems'

export const KeyChainContext = createContext()

export const KeyChainProvider = ({ children }) => {

    const defaultComponenet = <h1 key='KeyChain-DefaultLayout'>hello Default</h1>

    const [KeyChainComponent, setKeyChainComponent] = useState(defaultComponenet)

    const updateKeyChainComponent = (componentName) => {
        switch (componentName) {
            case 'defaultComponent':
                setKeyChainComponent(defaultComponenet)
                break;

            default:
                break;
        }
    }

    console.log('rendering: KeyChainProvider')

    return (
        <KeyChainContext.Provider value={{ KeyChainComponent, updateKeyChainComponent }}>
            {children}
        </KeyChainContext.Provider>
    )
}