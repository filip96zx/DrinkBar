import React, { useState, useEffect} from 'react';
import ContainerStyled from './App.style';
import HomeComponent from './Components/homeComponents/HomeComponent';
import Search from './Components/search/Search';
import BackgroundComponent from './Components/background/BackgroundComponent';


let scrollShow = true;
let scrollCount = 0;
let scrollStart = 0;
let scrollBefore = 0; 
let scrollCurrent = 0;

function App() {

  const [drinksIdsList, setDrinksIdsList] = useState([]);
  const [showSearchButton, setShowSearchButton] = useState(true);
  const [showSearch, setShowSearch] = useState(false);

  

  const handleShowMenuButton = (ref) => {
    scrollCurrent = ref.target.scrollTop;
    scrollCount++;
    if (scrollCount > 10) {
      scrollStart = scrollCurrent;
      scrollBefore = scrollCurrent;
    }
    if (scrollBefore <= scrollCurrent) {
      scrollBefore = scrollCurrent;
      scrollCount = 0;
    }
    if (scrollCurrent + 100 < scrollBefore && !scrollShow) {
      setShowSearchButton(true);
      scrollStart = scrollCurrent;
      scrollBefore = 0;
      scrollShow = true;
    }
    if (scrollStart + 100 < scrollCurrent && scrollShow) {
      setShowSearchButton(false);
      setShowSearch(false);
      scrollShow = false;
    }
    if(scrollCurrent === 0) setShowSearchButton(true);
  };


  return (
    <>
      <Search showSearchButton={showSearchButton} showSearch={showSearch} setShowSearch={setShowSearch} setDrinksIdsList={setDrinksIdsList}></Search>
      <ContainerStyled>
        <BackgroundComponent/>
        <HomeComponent handleShowMenuButton={handleShowMenuButton} drinksIdsList={drinksIdsList}/>
      </ContainerStyled>
    </>
  );
}

export default App;
