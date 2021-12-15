import React, { useState, createContext, useEffect } from 'react';
import FavouriteService from '../Services/FavouriteService';

export const FavouriteCountContext = createContext();

const FavouriteCountContextProvider = ({ children }) => {
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    setCount(FavouriteService.favouriteDrinksList().length);
  }, []);


  const handleCount = () => {
    setCount(FavouriteService.favouriteDrinksList().length);
  }

  return <FavouriteCountContext.Provider value={{count:count, handleCount: handleCount}}>{children}</FavouriteCountContext.Provider>;
};


export default FavouriteCountContextProvider;