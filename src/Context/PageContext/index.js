import React, { useState, createContext } from 'react'
import Home from '../../Pages/Home'
import PasswordGenerator from '../../Components/PasswordGenerator'

export const PageContext = createContext()

export default function PageProvider({ children }) {

    const [page, setPage] = useState(<Home key="home" />)

    const updatePage = (pageName) => {
        switch (pageName) {
            case 'home':
                setPage(<Home key={pageName} />)
                break;

            case 'passwordGenerator':
                setPage(<PasswordGenerator key={pageName} />)
                break;

            default:
                setPage(<Home key={pageName} />)
                break;
        }
    }
    console.log('rendering: PageProvider')


    return (
        <PageContext.Provider value={{ page, updatePage }}>
            {children}
        </PageContext.Provider>
    )
}
