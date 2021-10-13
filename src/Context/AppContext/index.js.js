import React, { useState, createContext } from 'react'
import Landing from '../../Pages/Landing'
import PasswordGenerator from '../../Components/PasswordGenerator'

export const AppContext = createContext()

export default function AppProvider({ children }) {

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