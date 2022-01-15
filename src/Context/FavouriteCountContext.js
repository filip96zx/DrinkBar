import React, { useState, createContext, useEffect } from 'react';
import FavouriteService from '../Services/FavouriteService';

export const FavouriteCountContext = createContext({count:0, handleCount: () => { }});

const FavouriteCountContextProvider = ({ children }) => {
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    if(FavouriteService.favouriteDrinksList()) {
      setCount(FavouriteService.favouriteDrinksList().length);
    }
  }, []);


  const handleCount = () => {
    setCount(FavouriteService.favouriteDrinksList().length);
  }

  return <FavouriteCountContext.Provider value={{count:count, handleCount: handleCount}}>{children}</FavouriteCountContext.Provider>;
};


export default FavouriteCountContextProvider;