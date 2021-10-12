// import logo from './logo.svg';
import React, { useContext } from 'react'
import { PageContext } from './Context/PageContext'
import CustomNav from './Components/CustomNav'
import './App.css';

function App() {

  const { page } = useContext(PageContext)
  console.log('rendering: App')
  return (
    <>
      <CustomNav />
      {page}
    </>
  );
}

export default App;
