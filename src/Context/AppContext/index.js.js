import React, { useState, createContext } from 'react'
import Landing from '../../Pages/Landing'
import PasswordGenerator from '../../Components/PasswordGenerator'
import CreateChain from '../../Components/Forms/CreateChain'

export const AppContext = createContext()

export default function AppProvider({ children }) {

    const [content, setContent] = useState(<Landing key="landing" />)

    const updateContent = (pageName) => {
        switch (pageName) {
            case 'landing':
                setContent(<Landing key={pageName} />)
                break;

            case 'createChain':
                setContent(<CreateChain key={pageName} />)
                break;

            case 'passwordGenerator':
                setContent(<PasswordGenerator key={pageName} />)
                break;

            default:
                setContent(<Landing key={pageName} />)
                break;
        }
    }

    console.log('rendering: AppProvider')

    return (
        <AppContext.Provider value={{ content, updateContent }}>
            {children}
        </AppContext.Provider>
    )
}