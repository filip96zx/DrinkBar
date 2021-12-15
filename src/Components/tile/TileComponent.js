import React, {useState, useEffect, useRef, useContext} from 'react';
import Tile , {Wrapper}from './Tile.style';
import FavouriteService from '../../Services/FavouriteService';
import { FavouriteCountContext } from '../../Context/FavouriteCountContext';

const heart = (className) => {
  return <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
};

const TileComponent = ({ drink }) => {
  const { idDrink, strDrinkThumb, strInstructions } = drink;
  const [isLiked, setIsLiked] = useState(false);
  const elementRef = useRef(null);
  const CountContext = useContext(FavouriteCountContext);
  let ingredients = [];

  useEffect(() => {
    setIsLiked(FavouriteService.isFavourite(idDrink));
  }, []);

  for (let i = 1; i < 16; i++) {
    if (drink['strIngredient' + i] === null || drink['strIngredient' + i].length === 0) break;
    const ingredient = drink['strIngredient' + i];
    const measure = drink['strMeasure' + i] === null ? '' : ' - ' + drink['strMeasure' + i];
    ingredients.push(<li key={i}>{ingredient + measure}</li>);
  }

  const handleLikeButton = () => {
    if(!isLiked) {
      FavouriteService.addToFavourites(idDrink);
      setIsLiked(true);
    } else {
      FavouriteService.removeFromFavourites(idDrink);
      setIsLiked(false);
    }
    CountContext.handleCount();
  }

  const handleMouseOut = (e) => {
    elementRef.current.querySelector('.drink-info').scrollTop = 0;
  }


  return (
    <Wrapper>
    <Tile onMouseLeave={handleMouseOut} onBlur={handleMouseOut} ref={elementRef}>
      <img src={strDrinkThumb} loading='lazy' />
      <div className='shadow-box'></div>
      <div className='info-background'></div>
      <div className='drink-info'>
        <h2>{drink.strDrink}</h2>
        <ul>{ingredients}</ul>
        <span className='line'></span>
        <p>{strInstructions}</p>   
      </div>
      <button onClick={handleLikeButton}>
        {isLiked? heart('like'): heart('')}
      </button>
    </Tile>
    </Wrapper>
  );
};

export default TileComponent;
