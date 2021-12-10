
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
    if(localStorage.favouriteDrinks){
    return JSON.parse(localStorage.getItem('favouriteDrinks')).list;
    }
  },
  isFavourite: (drinkId) =>{
    if(localStorage.favouriteDrinks){
      return JSON.parse(localStorage.getItem('favouriteDrinks')).list.includes(drinkId);
    } else {
      return false;
    }
  },
  removeFromFavourites: (drinkId) => {
    if(localStorage.favouriteDrinks && JSON.parse(localStorage.getItem('favouriteDrinks')).list.includes(drinkId)) {
      let list = JSON.parse(localStorage.getItem('favouriteDrinks'));
      list.list.splice(list.list.indexOf(drinkId),1);
      localStorage.setItem('favouriteDrinks', JSON.stringify(list));
    }
  }
}

export default FavouriteService