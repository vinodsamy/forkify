import * as model from './model.js';
import recipeView from './view/recipeView.js';
const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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

    window.addEventListener('hashchange', controlRecipes);
    window.addEventListener('load', controlRecipes);
  } catch (err) {
    alert(err);
  }
};
controlRecipes();
