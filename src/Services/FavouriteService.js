
const FavouriteService = {
  addToFavourites: (drinkId) => {
    if(localStorage.favouriteDrinks && !JSON.parse(localStorage.getItem('favouriteDrinks')).list.includes(drinkId)) {
      let list = JSON.parse(localStorage.getItem('favouriteDrinks'));
      list.list.push(drinkId);
      localStorage.setItem('favouriteDrinks', JSON.stringify(list));
    } else if (!localStorage.favouriteDrinks) {
      let list = {list: []};
      list.list.push(drinkId);
      console.log(list)
      localStorage.setItem('favouriteDrinks', JSON.stringify(list));
    }
  },
  favouriteDrinksList: () => {
    return JSON.parse(localStorage.getItem('favouriteDrinks'));
  }
}

export default FavouriteService