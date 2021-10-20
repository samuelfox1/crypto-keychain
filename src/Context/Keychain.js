import React, { createContext, useState, useContext, useEffect } from 'react';
import { AppContext } from '.';
import { AddItemForm } from '../Components/KeychainPageItems';

export const KeychainContext = createContext()

export const KeychainProvider = ({ children }) => {

    const [displayForm, setDisplayForm] = useState(false)

    const [KeychainComponent, setKeychainComponent] = useState()
    const { AppComponent } = useContext(AppContext)
    const [keychainData, setKeychainData] = useState({
        name: '',
        items: []
    })

    /**
     * reset default layout when tab is clicked
     useEffect(() => {
         if (AppComponent.key === 'Keychain') updateKeychainComponent(defaultKey)
        }, [AppComponent])
    */

    const clearKeychainData = () => setKeychainData({ name: '', items: [] })

    const deleteKeychainItem = (id) => {
        const filtered = keychainData.items.filter((_, idx) => id !== idx)
        setKeychainData({ ...keychainData, items: filtered })
    }

    const updateKeychainComponent = (componentName) => {
        switch (componentName) {
            case 'addKeychainItemForm':
                setKeychainComponent(<AddItemForm key={componentName} />)
                setDisplayForm(true)
                break;

            default:
                setKeychainComponent(null)
                setDisplayForm(false)
                break;
        }
    }

    console.log('rendering: KeychainProvider')

    return (
        <KeychainContext.Provider value={{
            KeychainComponent,
            updateKeychainComponent,

            displayForm,
            setDisplayForm,

            clearKeychainData,
            deleteKeychainItem,
            setKeychainData,
            keychainData
        }}>
            {children}
        </KeychainContext.Provider>
    )
}