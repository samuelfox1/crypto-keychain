import React, { createContext, useState } from 'react'
import { DefaultLayout, CreateChainForm } from '../Components/HomePageItems'

export const HomeContext = createContext()

export const HomeProvider = ({ children }) => {

    const [HomeComponent, setHomeComponent] = useState(<DefaultLayout key='Home-DefaultLayout' />)

    const updateHomeComponent = (componentName) => {
        switch (componentName) {
            case 'DefaultLayout':
                setHomeComponent(<DefaultLayout key={`Home-${componentName}`} />)
                break;

            case 'createChain':
                setHomeComponent(<CreateChainForm key={componentName} />)
                break;

            default:
                break;
        }
    }

    console.log('rendering: HomeProvider')

    return (
        <HomeContext.Provider value={{ HomeComponent, updateHomeComponent }}>
            {children}
        </HomeContext.Provider>
    )
}
