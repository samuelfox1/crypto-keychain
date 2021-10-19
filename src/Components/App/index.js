// import logo from './logo.svg';
import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
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
        <Container className="pb-1">
          <HomeProvider>
            {AppComponent}
          </HomeProvider>
        </Container>
        <Footer />
      </KeychainProvider>
    </>
  );
}

export default App;
