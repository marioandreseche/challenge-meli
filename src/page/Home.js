import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/header/Header';
import Resultado from '../page/Resultado';

const Home = () => {
  return (
    <>    
    <BrowserRouter>
      <Routes>
        <Route path="/items" element={<Resultado/>} exact/>
    </Routes>
    </BrowserRouter>
  </>
  )
}
 export default Home;