import React, { createContext, useState } from 'react'
import { CreateChain } from '../../Components/Forms'
import { Buttons } from '../../Components/LandingPageItems'

export const LandingContext = createContext()

export default function LandingProvider({ children }) {

    const [LandingComponent, setLandingComponent] = useState(<Buttons key='landing-buttons' />)

    const updateLandingComponent = (componentName) => {
        switch (componentName) {
            case 'buttons':
                setLandingComponent(<Buttons key={`landing-${componentName}`} />)
                break;

            case 'createChain':
                console.log('here')
                setLandingComponent(<CreateChain key={componentName} />)
                break;

            default:
                break;
        }
    }

    console.log('rendering: LandingProvider')

    return (
        <LandingContext.Provider value={{ LandingComponent, updateLandingComponent }}>
            {children}
        </LandingContext.Provider>
    )
}
