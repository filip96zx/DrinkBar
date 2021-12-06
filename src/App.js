import React from 'react';
import { Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from './Components/navbar';
import SearchPage from './Pages/SearchPage';
import background from './Assets/background6kx8k.jpg';
import ContainerStyled from './App.style';

function App() {
  return (
    <>
      <Navbar/>
      <ContainerStyled bg={background}>
      {/* <img className='background-img' src={background} alt="" /> */}
      <div className="background-img"><div></div></div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/search' element={<SearchPage/>}/>
      </Routes>
      </ContainerStyled>
    </>
  );
}

export default App;
