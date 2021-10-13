import React, { useState, createContext } from 'react'
import Landing from '../../Pages/Landing'
import PasswordGenerator from '../../Components/PasswordGenerator'
import CreateChain from '../../Components/Forms/CreateChain'

export const AppContext = createContext()

export default function AppProvider({ children }) {

    const [component, setComponent] = useState(<Landing key="landing" />)

    const updateComponent = (componentName) => {
        switch (componentName) {
            case 'landing':
                setComponent(<Landing key={componentName} />)
                break;

            case 'passwordGenerator':
                setComponent(<PasswordGenerator key={componentName} />)
                break;

            default:
                setComponent(<Landing key={componentName} />)
                break;
        }
    }

    console.log('rendering: AppProvider')

    return (
        <AppContext.Provider value={{ component, updateComponent }}>
            {children}
        </AppContext.Provider>
    )
}