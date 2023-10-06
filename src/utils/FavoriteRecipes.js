export const setRecipesInStorage = (recipe) => {
    const stringifiedRecipe = JSON.stringify(recipe);
    localStorage.setItem("recipe", stringifiedRecipe);
}

export const getRecipesInStorage = () => {
    const storedRecipe = localStorage.getItem("recipe")
    return storedRecipe ? JSON.parse(storedRecipe) : [];
}