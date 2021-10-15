import React, { createContext, useState, useContext, useEffect } from 'react';
import { AppContext } from '.';
import { DefaultLayout, AddItemForm } from '../Components/KeychainPageItems';

export const KeychainContext = createContext()

export const KeychainProvider = ({ children }) => {

    const defaultKey = 'DefaultLayout'
    const defaultComponenet = <DefaultLayout key={defaultKey} />

    const [KeychainComponent, setKeychainComponent] = useState()
    const { AppComponent } = useContext(AppContext)
    const [keychainData, setKeychainData] = useState({
        name: '',
        items: []
    })

    useEffect(() => {
        if (AppComponent.key === 'Keychain') updateKeychainComponent(defaultKey)
    }, [AppComponent])

    const clearKeychainData = () => setKeychainData({ name: '', items: [] })

    const deleteKeychainItem = (id) => {
        const filtered = keychainData.items.filter((_, idx) => id !== idx)
        setKeychainData({ ...keychainData, items: filtered })
    }

    const updateKeychainComponent = (componentName) => {
        switch (componentName) {
            case defaultKey:
                setKeychainComponent(defaultComponenet)
                break;

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