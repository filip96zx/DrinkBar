import React, { useState, useEffect } from 'react';
import DrinkService from '../../Services/DrinkService';
import HomeStyled from './Home.style';
import TileComponent from './tile/TileComponent';

const HomeComponent = () => {
  const [drinks, setDrinks] = useState([]);
  const [drinksCount, setDrinksCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [download, setDownload] = useState(false); 

  useEffect(() => {
    let drinkList = [...drinks];
    setLoading(true);
    if(drinks.length < drinksCount) {
      getRandomDrinks().then(all => {
        all.forEach(response => drinkList.push(<TileComponent key={drinkList.length} drink={response.value.drinks[0]}/>));
        setDrinks(drinkList);
        setLoading(false);
        setDownload(false);
      });
    }
  }, [drinks, drinksCount]);

  useEffect(()=>{
    window.addEventListener("scroll", increaseDrinksCount);
    return () => {window.removeEventListener('scroll', increaseDrinksCount)}
  },[]);


  useEffect(()=>{
    if(download){
      setDrinksCount(drinksCount+10);
    }
  },[download]);
  
  const increaseDrinksCount = () => {
    if(document.body.offsetHeight - window.scrollY < window.innerHeight * 3 && !loading){
      setDownload(true);
    }
  }
  
  // const increaseDrinksCount = () => {
  //   if(document.body.offsetHeight - window.scrollY < 3500 && !loading){
  //     console.log(document.body.offsetHeight - window.scrollY);
  //     setDrinksCount(drinksCount + 20);
  //     window.removeEventListener("scroll", increaseDrinksCount)
  //   }
  // }

  const getRandomDrinks = () => {
    const promiseList = [];
    for(let i = drinks.length; i < drinksCount; i++) {
      console.log('robie liste promisów')
      promiseList.push(DrinkService.getRandomDrink());
    }
    return Promise.allSettled(promiseList);
  };



  return (
    <HomeStyled>
      { drinks.length > 0 && drinks}
    </HomeStyled>
  );
};

export default HomeComponent;
