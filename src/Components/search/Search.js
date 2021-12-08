import React, { useState, useEffect } from 'react';
import DrinkService from '../../Services/DrinkService';
import SearchStyled, { SearchButtonStyled } from './Search.style';

let scrollShow = true;
let scrollCount = 0;
let scrollStart = 0;
let scrollBefore = 0; 
let scrollCurrent = 0;

const Search = ({ setDrinksIdsList }) => {
  const [hint, setHint] = useState([]);
  const [ingredientInput, setIngredientInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [idsToLoad, setIdsToLoad] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [showSearchButton, setShowSearchButton] = useState(true);

  useEffect(() => {
    const list = [];
    DrinkService.getIngredientsList().then((res) => {
      res.drinks.forEach((ingredient) => list.push(ingredient.strIngredient1));
      setIngredients(list);
    });
  }, []);

  useEffect(() => {
    if (idsToLoad.length > 0) setDrinksIdsList(idsToLoad);
  }, [idsToLoad]);

  useEffect(() => {
    window.addEventListener('scroll', handleShowSearchButton);
    return () => {
      window.removeEventListener('scroll', handleShowSearchButton);
    };
  }, []);

  const handleChangeName = (e) => {
    setNameInput(e.target.value);
  };

  const handleChangeIngredient = (e) => {
    setIngredientInput(e.target.value);
    displayHint(e.target.value);
  };

  const displayHint = (hintIncludes) => {
    if (hintIncludes === '') {
      setHint([]);
      return;
    }
    let hintList = [];
    hintList = ingredients.filter((i) => i.toLowerCase().includes(hintIncludes.toLowerCase()));
    const hints = [];
    hintList.forEach((i) => {
      const startIndex = i.toLowerCase().indexOf(hintIncludes.toLowerCase());
      const endIndex = startIndex + hintIncludes.length;
      hints.push(
        <div onClick={() => handleUseHint(i)} type='button' className='hint' key={i}>
          {i.slice(0, startIndex)}
          <strong>{i.slice(startIndex, endIndex)}</strong>
          {i.slice(endIndex, i.length)}
        </div>
      );
    });
    setHint(hints);
  };

  const handleUseHint = (text) => {
    setIngredientInput(text);
    setNameInput('');
    getDrinksByIngredient(text);
    setHint([]);
  };

  const handleIngredientSubmit = (e) => {
    e.preventDefault();
    const searchIngredient = ingredients.find((el) => el.toLowerCase().includes(ingredientInput.toLowerCase()));
    setIngredientInput(searchIngredient);
    if (ingredientInput === '') {
      setDrinksIdsList([]);
      setIngredientInput('');
      return;
    }
    setNameInput('');
    getDrinksByIngredient(searchIngredient);
    setHint([]);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setIngredientInput('');
    if (nameInput === '') setDrinksIdsList([]);
    getDrinksByName(nameInput);
  };

  const getDrinksByIngredient = (ingredient) => {
    let idsList = [];
    DrinkService.getDrinksByIngredient(ingredient)
      .then((resp) => {
        resp.drinks.forEach((drink) => idsList.push(drink.idDrink));
        setIdsToLoad(idsList);
      })
      .catch((err) => err);
  };

  const getDrinksByName = (name) => {
    let idsList = [];
    DrinkService.getDrinksByName(name)
      .then((resp) => {
        resp.drinks.forEach((drink) => idsList.push(drink.idDrink));
        setIdsToLoad(idsList);
      })
      .catch((err) => err);
  };

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  };


  const handleShowSearchButton = () => {
    scrollCurrent = window.scrollY;
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
  };

  return (
    <>
      <SearchStyled className={showSearch ? 'show' : null}>
        <h2>Search</h2>
        <form onSubmit={handleNameSubmit}>
          <div className='form-group'>
            <label htmlFor='nameInput'>Name&nbsp;</label>
            <input type='text' id='nameInput' value={nameInput} onChange={handleChangeName} />
          </div>
        </form>
        <form onSubmit={handleIngredientSubmit}>
          <div className='form-group'>
            <label htmlFor='ingredientInput'>Ingredient&nbsp;</label>
            <input autoComplete='off' type='text' id='ingredientInput' value={ingredientInput} onChange={handleChangeIngredient} />
            <div className='hints'>{hint}</div>
          </div>
        </form>
      </SearchStyled>
      <SearchButtonStyled className={showSearchButton ? 'show' : null} onClick={handleShowSearch} />
    </>
  );
};

export default Search;
