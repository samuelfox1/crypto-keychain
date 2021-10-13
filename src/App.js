// import logo from './logo.svg';
import React, { useContext } from 'react'
import { PageContext } from './Context/PageContext'
import CustomNav from './Components/CustomNav'
import './App.css';
import { Container } from 'react-bootstrap';

function App() {

  const { page } = useContext(PageContext)
  console.log('rendering: App')
  return (
    <>
      <CustomNav />
      <Container className="pb-1">
        {page}
      </Container>
      <h6 id="signature">_samuel fox <small>2021</small></h6>
    </>
  );
}

export default App;
