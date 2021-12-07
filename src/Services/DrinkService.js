import config from '../config';

const { apiURL } = config;

const DrinkService = {
  getRandomDrink: () => {
    return fetch(apiURL + '/json/v1/1/random.php').then((resp) => resp.json());
  },
  getIngredientsList: () => {
    return fetch(apiURL + '/json/v1/1/list.php?i=list').then((resp) => resp.json());
  },
  getDrinksByIngredient: (ingredient) => {
    return fetch(apiURL + '/json/v1/1/filter.php?i=' + ingredient.replace(/ /g, '+')).then((resp) => resp.json());
  },
  getDrinksByName: (name) => {
    return name.length > 1
      ? fetch(apiURL + '/json/v1/1/search.php?s=' + name.replace(/ /g, '+')).then((resp) => resp.json())
      : fetch(apiURL + '/json/v1/1/search.php?f=' + name).then((resp) => resp.json());
  },
  getDrinkById: (id) => {
    return fetch(apiURL + '/json/v1/1/lookup.php?i=' + id).then((resp) => resp.json());
  },
};

export default DrinkService;
