import React, { createContext, useState } from 'react';
import { KeychainMain } from '../../Components/KeychainItems';
export const KeychainContext = createContext()

export const KeychainProvider = ({ children }) => {

    const defaultComponenet = <KeychainMain key="keychainMain" />

    const [KeychainComponent, setKeychainComponent] = useState(defaultComponenet)
    const [keychainData, setKeychainData] = useState({
        name: '',
        items: []
    })

    const clearKeychainData = () => setKeychainData({ name: '', items: [] })

    const deleteKeychainItem = (id) => {
        const filtered = keychainData.items.filter((_, idx) => id !== idx)
        setKeychainData({ ...keychainData, items: filtered })
    }

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
        <KeychainContext.Provider value={{
            KeychainComponent,
            updateKeychainComponent,

            clearKeychainData,
            deleteKeychainItem,
            keychainData
        }}>
            {children}
        </KeychainContext.Provider>
    )
}