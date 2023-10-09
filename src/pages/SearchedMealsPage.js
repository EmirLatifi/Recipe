import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { RecipeContext } from '../App';
import { BeatLoader } from 'react-spinners';

function SearchedMealsPage() {

    const recipeContext = useContext(RecipeContext);
    const { search, favoriteRecipe, setFavoriteRecipe, onClickGetId } = recipeContext;

    const [searchRecipes, setSearchRecipes] = useState([]);
    const [noResults, setNoResults] = useState(false);
    const [loading, setLoading] = useState(true);

    const onClickFavorite = (idMeal) => {
        if (favoriteRecipe.some((recipe) => recipe.idMeal === idMeal)) {
            alert("You have added this emoji before ");
            return;
        }
        const favorite = searchRecipes.find((recipe) => recipe.idMeal === idMeal);
        setFavoriteRecipe((prevRecipes) => [...prevRecipes, favorite])
    }

    useEffect(() => {
        if (search) {
            fetchRecipes();
        }
    }, [search]);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const data = response.data.meals;
            if (data) {
                setSearchRecipes(data);
            } else {
                setSearchRecipes([]);
                setNoResults(true);
            }
            setTimeout(() => {
                setLoading(false)
            }, 800)

        } catch (error) {
            console.error(error);

        };
    }
    return (
        <>
            {loading ?
                (
                    <div className="flex flex-col items-center pt-10">
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
                        {search && (
                            <div>
                                {noResults ? (
                                    <p className=" text-3xl text-center font-crimson py-10">
                                        There are no recipes with those letters.
                                    </p>
                                ) :
                                    (
                                        <div className="w-10/12 grid grid-cols-2 sm:grid-cols-3 mx-auto pt-10 gap-x-10 gap-y-4 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:grid-cols-4">
                                            {searchRecipes.map(recipe => (
                                                <div
                                                    key={recipe.idMeal}
                                                    className="relative rounded-lg m-3">
                                                    <img onClick={() => onClickGetId(recipe.idMeal)} className=" rounded-[50%] hover:scale-105 hover:cursor-pointer shadow-lg shadow-black" src={recipe.strMealThumb} alt="Food Image"></img>
                                                    <div className="flex items-center justify-center gap-2 pt-2">
                                                        <p className=" text-center text-white font-courgette text-xl lg:text-2xl truncate">{recipe.strMeal}</p>
                                                        <button onClick={() => onClickFavorite(recipe.idMeal)} className="text-2xl lg:text-3xl text-red-800 hover:text-red-200 hover:cursor-pointer"><FontAwesomeIcon icon={faHeart} /></button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )
                                }
                            </div>
                        )}
                    </>
                )
            }
        </>
    )
}

export default SearchedMealsPage
