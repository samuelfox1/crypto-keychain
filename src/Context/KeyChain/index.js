import React, { createContext, useState } from 'react'
import KeychainMain from '../../Components/KeychainItems/Main'
// import { } from '../../Components/KeychainItems'

export const KeychainContext = createContext()

export const KeychainProvider = ({ children }) => {

    const defaultComponenet = <KeychainMain key="keychainMain" />

    const [KeychainComponent, setKeychainComponent] = useState(defaultComponenet)

    const updateKeychainComponent = (componentName) => {
        switch (componentName) {
            case 'defaultComponent':
                setKeychainComponent(defaultComponenet)
                break;

            default:
                break;
        }
    }

    console.log('rendering: KeychainProvider')

    return (
        <KeychainContext.Provider value={{ KeychainComponent, updateKeychainComponent }}>
            {children}
        </KeychainContext.Provider>
    )
}