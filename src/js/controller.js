import { async } from 'regenerator-runtime';
import * as model from './model.js';
import recipeView from './view/recipeView.js';
const recipeContainer = document.querySelector('.recipe');
const search = document.querySelector('.search');
const searchField = document.querySelector('.search__field');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async () => {
  //load the single recipe
  try {
    const id = window.location.hash.slice(1);
    console.log('id', id);
    if (!id) return;
    // renderSpinner(recipeContainer);
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    const { recipe } = model.state;
    recipeView.render(recipe);
    console.log('controller', recipe);
    //Render the recipe
  } catch (err) {
    console.error(err);
    // throw err;
    recipeView.renderError();
  }
};
controlRecipes();
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);

search.addEventListener('submit', async e => {
  e.preventDefault();
  const query = searchField.value;
  const searchResults = await model.loadSearchResults(query);
  console.log('searchRecipeData', searchResults);
  searchField.value = '';
});

const init = () => {
  //publisher-subsciber method
  recipeView.addHandlerRender(controlRecipes);
};
init();
