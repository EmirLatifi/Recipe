import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { RecipeContext } from '../App';


function CategoriesCode({ category, desc, name }) {

    const recipeContext = useContext(RecipeContext);
    const { favoriteRecipe, setFavoriteRecipe, onClickGetId } = recipeContext;

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    const onClickFavorite = (idMeal) => {
        if (favoriteRecipe.some((recipe) => recipe.idMeal === idMeal)) {
            alert("You have added this recipe before ");
            return;
        }
        const favorite = recipes.find((recipe) => recipe.idMeal === idMeal);
        setFavoriteRecipe((prevRecipes) => [...prevRecipes, favorite])
    }

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            const data = response.data.meals;
            setRecipes(data);
            setTimeout(() => {
                setLoading(false)
            }, 1000)


        } catch (error) {
            console.error(error);
            setLoading(false)
        };
    }

    return (
        <div className="bg-fixed">
            {loading ?
                (
                    <div className="flex flex-col items-center justify-center pt-10">
                        <BeatLoader
                            className=""
                            color={'#000000'}
                            loading={loading}
                            size={20}
                        />
                        <p className="text-center text-3xl font-crimson pt-5">Loading...</p>
                    </div>

                ) :
                (
                    <>
                        <div className="flex flex-col items-center justify-center mx-auto pt-14 pb-4 w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12">
                            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-courgette">{name}</h3>
                            <p className="text-center text-lg xl:text-xl pt-5 font-crimson">{desc}</p>
                        </div>
                        <div className="w-10/12 grid grid-cols-2 sm:grid-cols-3 mx-auto pt-10 gap-x-10 gap-y-4 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:grid-cols-4">
                            {
                                recipes.map(recipe => (
                                    <div
                                        key={recipe.idMeal}
                                        className="relative rounded-lg m-3">
                                        <img onClick={() => onClickGetId(recipe.idMeal)} className=" rounded-[50%] hover:scale-105 hover:cursor-pointer shadow-lg shadow-black" src={recipe.strMealThumb} alt="Food Image"></img>
                                        <div className="flex items-center justify-center gap-2 pt-2">
                                            <p className=" text-center text-white font-courgette text-xl lg:text-2xl truncate">{recipe.strMeal}</p>
                                            <button onClick={() => onClickFavorite(recipe.idMeal)} className="text-2xl lg:text-3xl text-red-800 hover:text-red-200 hover:cursor-pointer"><FontAwesomeIcon icon={faHeart} /></button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                )}
        </div >
    )
}

export default CategoriesCode