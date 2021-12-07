import React, { useState} from 'react';
import background from './Assets/background6kx8k.jpg';
import backgroundLow from './Assets/background0.7x1k.jpg';
import ContainerStyled from './App.style';
import HomeComponent from './Components/homeComponents/HomeComponent';
import Search from './Components/search/Search';

function App() {

  const [drinksIdsList, setDrinksIdsList] = useState([]);

  return (
    <>
      {/* <Navbar setDrinksIdsList={setDrinksIdsList}/> */}
      <Search setDrinksIdsList={setDrinksIdsList}></Search>
      <ContainerStyled>
        <img className='background-img' src={backgroundLow} alt="" />
        <img className='background-img' src={background} alt="" />
        <div className='background-img-darken'/>
        <HomeComponent drinksIdsList={drinksIdsList}/>
        {/* <HomePage drinksIdsList={drinksIdsList}/> */}
        {/* <Routes>
          <Route path='*' element={} />
          <Route path='/DrinkBar/' element={<HomePage />} />
          <Route path='/DrinkBar/search' element={<SearchPage />} />
        </Routes> */}
      </ContainerStyled>
    </>
  );
}

export default App;
