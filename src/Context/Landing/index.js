import React, { createContext, useState } from 'react'
import { DefaultLayout, CreateChainForm } from '../../Components/LandingPageItems'

export const LandingContext = createContext()

export const LandingProvider = ({ children }) => {

    const [LandingComponent, setLandingComponent] = useState(<DefaultLayout key='landing-DefaultLayout' />)

    const updateLandingComponent = (componentName) => {
        switch (componentName) {
            case 'DefaultLayout':
                setLandingComponent(<DefaultLayout key={`landing-${componentName}`} />)
                break;

            case 'createChain':
                console.log('here')
                setLandingComponent(<CreateChainForm key={componentName} />)
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
