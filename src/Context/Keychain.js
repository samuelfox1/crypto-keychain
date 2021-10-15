import React, { createContext, useState } from 'react';
import { DefaultLayout, AddItemForm } from '../Components/KeychainPageItems';
export const KeychainContext = createContext()

export const KeychainProvider = ({ children }) => {

    const defaultComponenet = <DefaultLayout key="DefaultLayout" />

    const [KeychainComponent, setKeychainComponent] = useState()
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
            // case 'defaultComponent':
            //     setKeychainComponent(defaultComponenet)
            //     break;

            case 'addKeychainItemForm':
                setKeychainComponent(<AddItemForm key={componentName} />)
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
            setKeychainData,
            keychainData
        }}>
            {children}
        </KeychainContext.Provider>
    )
}