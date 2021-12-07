import React from 'react';
import Tile from './Tile.style';

const TileComponent = ({ drink }) => {
  const { strDrinkThumb, strInstructions } = drink;
  let ingredients = [];
  for (let i = 1; i < 16; i++) {
    if (drink['strIngredient' + i] === null || drink['strIngredient' + i].length === 0) break;
    const ingredient = drink['strIngredient' + i];
    const measure = drink['strMeasure' + i] === null ? '' : ' - ' + drink['strMeasure' + i];
    ingredients.push(<li key={i}>{ingredient+ measure}</li>);
  }

  return (
    <Tile>
      <img src={strDrinkThumb} alt='' loading='lazy' />
      <div className='shadow-box'></div>
      <div className="info-background"></div>
      <div className='drink-info'>
        <h2>{drink.strDrink}</h2>
        <ul>{ingredients}</ul>
        <span className='line'></span>
        <p>{strInstructions}</p>
      </div>
    </Tile>
  );
};

export default TileComponent;
