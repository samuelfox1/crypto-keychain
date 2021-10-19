import React, { useState, createContext } from 'react'
import { Keychain, Home } from '../Pages'
import { DefaultLayout } from '../Components/PasswordGeneratorPageItems'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const defaultComponent = <Home key="Home" />
    const [AppComponent, setAppComponent] = useState(defaultComponent)

    const updateAppComponent = (componentName) => {
        // slight delay just for fun / feel
        setTimeout(() => {
            switch (componentName) {
                case 'Home': setAppComponent(<Home key={componentName} />)
                    break;

                case 'DefaultLayout': setAppComponent(<DefaultLayout key={componentName} />)
                    break;

                case 'Keychain': setAppComponent(<Keychain key={componentName} />)
                    break;

                default: setAppComponent(defaultComponent)
                    break;
            }
        }, 100);
    }

    console.log('rendering: AppProvider')

    return (
        <AppContext.Provider value={{ AppComponent, updateAppComponent }}>
            {children}
        </AppContext.Provider>
    )
}