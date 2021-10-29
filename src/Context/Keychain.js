import React, { createContext, useState } from 'react';
import { AddItemForm } from '../Components/KeychainPageItems';
import { getLocalStorageDecrypted, getUserPassword, setLocalStorage } from '../Utilty';

const defaultKeychainData = { name: '', items: [] }

export const KeychainContext = createContext()

export const KeychainProvider = ({ children }) => {

    const [displayForm, setDisplayForm] = useState(false)
    const [KeychainComponent, setKeychainComponent] = useState()
    const [keychainData, setKeychainData] = useState(defaultKeychainData)
    const resetKeychainData = () => setKeychainData(defaultKeychainData)

    const deleteKeychainItem = (name, id) => {
        let pw
        while (!pw) {
            pw = getUserPassword()
            // when user clicks cancel
            if (pw === null) return
            // we'll get data back for this chain if password is correct
            if (!getLocalStorageDecrypted(keychainData.name, pw)) pw = ''
        }

        // final confirmation before delete
        if (!window.confirm(`deleting ${name} from ${keychainData.name}, are you sure?`)) return

        const filtered = keychainData.items.filter(item => item.id !== id)
        setLocalStorage(keychainData.name, pw, filtered)
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

            resetKeychainData,
            deleteKeychainItem,
            setKeychainData,
            keychainData
        }}>
            {children}
        </KeychainContext.Provider>
    )
}