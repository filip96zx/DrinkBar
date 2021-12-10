import config from '../config';

const { apiURL } = config;

const DrinkService = {
  getRandomDrink: () => {
    return fetch(apiURL + '/random.php').then((resp) => resp.json());
  },
  getIngredientsList: () => {
    return fetch(apiURL + '/list.php?i=list').then((resp) => resp.json());
  },
  getDrinksByIngredient: (ingredient) => {
    return fetch(apiURL + '/filter.php?i=' + ingredient.replace(/ /g, '+')).then((resp) => resp.json());
  },
  getDrinksByName: (name) => {
    return name.length > 1
      ? fetch(apiURL + '/search.php?s=' + name.replace(/ /g, '+')).then((resp) => resp.json())
      : fetch(apiURL + '/search.php?f=' + name).then((resp) => resp.json());
  },
  getDrinkById: (id) => {
    return fetch(apiURL + '/lookup.php?i=' + id).then((resp) => resp.json());
  },
};

export default DrinkService;
