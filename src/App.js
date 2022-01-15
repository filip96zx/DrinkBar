import React, { useState, useEffect} from 'react';
import HomeComponent from './Components/homeComponents/HomeComponent';
import MenuBar from './Components/menuBar/MenuBar';
import BackgroundComponent from './Components/background/BackgroundComponent';
import FavouriteCountContextProvider from './Context/FavouriteCountContext';


let scrollShow = true;
let scrollCount = 0;
let scrollStart = 0;
let scrollBefore = 0; 
let scrollCurrent = 0;

function App() {

  const [drinksIdsList, setDrinksIdsList] = useState([]);
  const [showMenuButton, setShowMenuButton] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  

  

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
      setShowMenuButton(true);
      scrollStart = scrollCurrent;
      scrollBefore = 0;
      scrollShow = true;
    }
    if (scrollStart + 100 < scrollCurrent && scrollShow) {
      setShowMenuButton(false);
      setShowMenu(false);
      scrollShow = false;
    }
    if(scrollCurrent === 0) setShowMenuButton(true);
  };


  return (
    <FavouriteCountContextProvider>
      <MenuBar showMenuButton={showMenuButton} showMenu={showMenu} setShowMenu={setShowMenu} setDrinksIdsList={setDrinksIdsList}></MenuBar>
      <main>
        <BackgroundComponent/>
        <HomeComponent handleShowMenuButton={handleShowMenuButton} drinksIdsList={drinksIdsList}/>
      </main>
    </FavouriteCountContextProvider>
  );
}

export default App;
