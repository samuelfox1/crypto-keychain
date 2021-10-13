// import logo from './logo.svg';
import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import { AppContext, LandingProvider } from '../../Context/'
import CustomNav from '../CustomNav'
import Footer from '../Footer';
import './App.css';

function App() {
  const { AppComponent } = useContext(AppContext)

  console.log('rendering: App')

  return (
    <>
      <CustomNav />
      <Container className="pb-1">

        <LandingProvider>
          {AppComponent}
        </LandingProvider>

      </Container>
      <Footer />
    </>
  );
}

export default App;
