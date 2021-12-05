import config from "../config";


const { apiURL } = config;

const DrinkService = {

  getRandomDrink: () => {
    return fetch(apiURL+'/json/v1/1/random.php').then(resp => resp.json());
  },


}


export default DrinkService;