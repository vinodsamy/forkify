import { API_URL } from './config.js';
import { getJSON } from './helpers.js';
export const state = {
  recipe: {},
};

export const loadRecipe = async id => {
  try {
    console.log('API_URL', API_URL);
    const data = await getJSON(`${API_URL}${id}`);

    let { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      imageUrl: recipe.image_url,
      ingredients: recipe.ingredients,
      soureUrl: recipe.source_url,
      servings: recipe.servings,
      publisher: recipe.publisher,
      title: recipe.title,
    };

    console.log(state.recipe);
  } catch (err) {
    // alert(err);
    // console.error(err);
    throw err;
  }
};

export const loadSearchResults = async query => {
  try {
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log('searchResultsFromController', data);
    const { recipes } = data.data;
    console.log('recipes', recipes);
    return recipes;
  } catch (error) {
    throw error;
  }
};
// loadSearchResults('pizza');
