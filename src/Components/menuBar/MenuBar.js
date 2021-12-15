import React, { useState, useEffect, useContext } from 'react';
import DrinkService from '../../Services/DrinkService';
import FavouriteService from '../../Services/FavouriteService';
import MenuIcon from './MenuButton.style';
import MenuBarStyled, { SearchButtonStyled } from './MenuBar.style';
import { FavouriteCountContext } from '../../Context/FavouriteCountContext';

const MenuBar = ({ setDrinksIdsList, showMenuButton, showMenu, setShowMenu }) => {
  const [hint, setHint] = useState([]);
  const [ingredientInput, setIngredientInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [idsToLoad, setIdsToLoad] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const CountContext = useContext(FavouriteCountContext);

  const [showLikedList, setShowLikedList] = useState(false);

  useEffect(() => {});

  useEffect(() => {
    const list = [];
    DrinkService.getIngredientsList().then((res) => {
      res.drinks.forEach((ingredient) => list.push(ingredient.strIngredient1));
      setIngredients(list);
    });
  }, []);

  useEffect(() => {
    if (idsToLoad.length > 0) {
      setDrinksIdsList(idsToLoad);
      setShowLikedList(false);
    }
  }, [idsToLoad]);

  useEffect(() => {
    const likedList = FavouriteService.favouriteDrinksList();
    if (showLikedList && likedList) {
      setDrinksIdsList(likedList);
    } else {
      setDrinksIdsList([]);
    }
  }, [showLikedList]);

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
    let searchIngredient = ingredients.find((el) => el.toLowerCase().includes(ingredientInput.toLowerCase()));

    if (!searchIngredient) searchIngredient = '';

    setIngredientInput(searchIngredient);
    if (ingredientInput === '') {
      setDrinksIdsList([]);
      setShowLikedList(false);
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
    if (nameInput === '') {
      setDrinksIdsList([]);
      setShowLikedList(false);
    }
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

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const likedListShow = () => {
    setShowLikedList(true);
  };
  const likedListHide = () => {
    setShowLikedList(false);
    setDrinksIdsList([]);
  };

  const menuIcon = (
    <MenuIcon>
      <svg className={showMenu ? 'icon cross' : 'icon menu'} viewBox='0 0 100 80' width='30' height='30' fill='white'>
        <rect id='rect-one' width='100' rx='9' height='20'></rect>
        <rect id='rect-two' y='30' rx='9' width='100' height='20'></rect>
        <rect id='rect-three' y='60' rx='9' width='100' height='20'></rect>
      </svg>
    </MenuIcon>
  );

  return (
    <>
      <MenuBarStyled className={showMenu ? 'show' : null}>
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
            <input autoComplete='off' type='text' id='ingredientInput' value={ingredientInput} onChange={handleChangeIngredient} onBlur={() => setHint([])} />
            <div className='hints'>{hint}</div>
          </div>
        </form>
        {showLikedList ? (
          <button onClick={likedListHide}>all </button>
        ) : (
          <button disabled={CountContext.count < 1} onClick={likedListShow}>
            favourites ({CountContext.count})
          </button>
        )}
      </MenuBarStyled>
      <SearchButtonStyled className={showMenuButton ? 'show' : null} onClick={() => handleShowMenu()}>
        {menuIcon}
      </SearchButtonStyled>
    </>
  );
};

export default MenuBar;
