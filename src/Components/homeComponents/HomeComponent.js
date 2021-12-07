import React, { useState, useEffect } from 'react';
import DrinkService from '../../Services/DrinkService';
import HomeStyled from './Home.style';
import { WaitingTile } from './tile/Tile.style';
import TileComponent from './tile/TileComponent';

const HomeComponent = ({ drinksIdsList }) => {
  const [drinks, setDrinks] = useState([]);
  const [drinksCount, setDrinksCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [download, setDownload] = useState(true);
  const [drinksIds, setDrinksIds] = useState([]);
  const [searchTotalCount, setSearchTotalCount] = useState();
  const [filtered, setFiltered] = useState(false);

  const [WaitingTiles, setWaitingTiles] = useState([]);



  useEffect(() => {
    const totalCount = drinksIdsList.length;
    let WaitingTilesList = [];
    setDrinksIds(drinksIdsList);
    setSearchTotalCount(totalCount);
    setDrinks([]);
    setLoading(true);
    if(totalCount > 0) {
      setFiltered(true);
      for (let i = 0; i < drinksCount && i < totalCount; i++){
        WaitingTilesList.push(<WaitingTile key={i}></WaitingTile>)
      }
    } else {
      setFiltered(false);
      for (let i = 0; i < drinksCount; i++){
        WaitingTilesList.push(<WaitingTile key={i}></WaitingTile>)
      }
    }
    if (window.innerWidth > 1500) {
      setDrinksCount(30);
    } else {
      setDrinksCount(10);
    }
    setWaitingTiles(WaitingTilesList);
  }, [drinksIdsList]);

  useEffect(() => {
    if (window.innerWidth > 1500) {
      setDrinksCount(30);
    }
  }, []);

  useEffect(() => {
    let drinkList = [...drinks];
    let drinksIdsList = [...drinksIds];
    if(loading){
      if (drinks.length < drinksCount && drinksIds.length === 0 && !filtered) {
        getRandomDrinks().then((all) => {
          all.forEach((response) => drinkList.push(<TileComponent key={drinkList.length} drink={response.value.drinks[0]} />));
          setDrinks(drinkList);
          setLoading(false);
          setDownload(false);
        });
      }
      if (drinks.length < drinksCount && drinksIds.length > 0 && drinks.length < searchTotalCount && filtered) {
        getDrinksById().then((all) => {
          all.forEach((response) => {
            drinkList.push(<TileComponent key={drinkList.length} drink={response.value.drinks[0]} />);
            drinksIdsList.splice(drinksIdsList.indexOf(String(response.value.drinks[0].idDrink)), 1);
          });
          setDrinksIds(drinksIdsList);
          setDrinks(drinkList);
          setLoading(false);
          setDownload(false);
          setFiltered(true);
        });
      }
    }

  }, [drinks, drinksCount]);

  useEffect(() => {
    window.addEventListener('scroll', increaseDrinksCount);
    return () => {
      window.removeEventListener('scroll', increaseDrinksCount);
    };
  }, []);

  useEffect(() => {
    if (download) {
      setDrinksCount(drinksCount + 10);
      setLoading(true);
    }
  }, [download]);

  const increaseDrinksCount = () => {
    if (document.body.offsetHeight - window.scrollY < window.innerHeight * 3 && !loading) {
      setDownload(true);
    }
  };

  const getRandomDrinks = () => {
    const promiseList = [];
    for (let i = drinks.length; i < drinksCount; i++) {
      promiseList.push(DrinkService.getRandomDrink());
    }
    return Promise.allSettled(promiseList);
  };

  const getDrinksById = () => {
    const promiseList = [];
    let index = 0;
    for (let i = drinks.length; i < drinksCount && i < searchTotalCount; i++) {
      promiseList.push(DrinkService.getDrinkById(drinksIds[index]));
      index++;
    }
    return Promise.allSettled(promiseList);
  };

  return (
    <HomeStyled>
    {drinks.length > 0 && drinks}
    {drinks.length === 0 &&WaitingTiles}
    </HomeStyled>
    );
};

export default HomeComponent;
