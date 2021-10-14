import React, { useState, createContext } from 'react'
import { Keychain, Landing } from '../../Pages'
import { PasswordGenerator } from '../../Components/PasswordGeneratorItems'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const defaultComponent = <Landing key="landing" />
    const [AppComponent, setAppComponent] = useState(defaultComponent)

    const updateAppComponent = (componentName) => {
        switch (componentName) {
            case 'landing':
                setAppComponent(<Landing key={componentName} />)
                break;

            case 'passwordGenerator':
                setAppComponent(<PasswordGenerator key={componentName} />)
                break;

            case 'keychain':
                setAppComponent(<Keychain key={componentName} />)
                break;

            default:
                setAppComponent(defaultComponent)
                break;
        }
    }

    console.log('rendering: AppProvider')

    return (
        <AppContext.Provider value={{ AppComponent, updateAppComponent }}>
            {children}
        </AppContext.Provider>
    )
}