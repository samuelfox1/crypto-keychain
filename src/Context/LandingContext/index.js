import React, { createContext, useState } from 'react'
import CreateChain from '../../Components/Forms/CreateChain'
import { Buttons } from '../../Components/LandingPageItems'

export const LandingContext = createContext()

export default function LandingProvider({ children }) {

    const [component, setComponent] = useState(<Buttons key='landing-buttons' />)

    const updateComponent = (componentName) => {
        switch (componentName) {
            case 'buttons':
                setComponent(<Buttons key={`landing-${componentName}`} />)
                break;

            case 'createChain':
                setComponent(<CreateChain key={componentName} />)
                break;

            default:
                break;
        }
    }

    console.log('rendering: LandingProvider')

    return (
        <LandingContext.Provider value={{ component, updateComponent }}>
            {children}
        </LandingContext.Provider>
    )
}
