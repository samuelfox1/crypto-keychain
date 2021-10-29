// import logo from './logo.svg';
import React, { useContext } from 'react'
import { AppContext, HomeProvider, KeychainProvider } from '../../Context/'
import CustomNav from '../CustomNav'
import Footer from '../Footer';
import './App.css';

function App() {
    const { AppComponent } = useContext(AppContext)

    console.log('rendering: App')

    return (
        <>
            <KeychainProvider>
                <CustomNav />
                <HomeProvider>

                    {AppComponent}

                </HomeProvider>
                <Footer />
            </KeychainProvider>
        </>
    );
}

export default App;