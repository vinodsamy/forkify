export const state = {
  recipe: {},
};

export const loadRecipe = async id => {
  // alert('is it called');
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    // 5ed6604591c37cdc054bca57
    if (!res.ok) {
      throw new Error('Invalid id');
    }
    const data = await res.json();

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
    alert(err);
  }
};
