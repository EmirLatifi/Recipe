import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BeatLoader, CircleLoader } from 'react-spinners';
import { RecipeContext } from '../App';


function FavoritePage() {

    const navigate = useNavigate();
    const recipeContext = useContext(RecipeContext);
    const { setInfo, favoriteRecipe, setFavoriteRecipe } = recipeContext;

    const [loading, setLoading] = useState(true);


    setTimeout(() => {
        setLoading(false)
    }, 800)

    const onClickGetId = (item) => {
        setInfo(item)
        navigate("/ShowInfoPage")
    }

    const removeFavorite = (id) => {
        setFavoriteRecipe(favoriteRecipe.filter((remove) => remove.idMeal !== id))
    }


    return (
        <div className="bg-fixed">
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
                        <h2 className=" text-5xl xl:text-6xl font-marck text-center pt-10">Favorites</h2>
                        <div className="w-10/12 grid grid-cols-2 mx-auto pt-10 gap-x-10 gap-y-4 sm:grid-cols-3 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:grid-cols-4">
                            {favoriteRecipe.map(recipe => (
                                <div
                                    key={recipe.idMeal}
                                    className=" rounded-lg m-3">
                                    <img onClick={() => onClickGetId(recipe.idMeal)} className=" rounded-[50%] hover:scale-105 hover:cursor-pointer shadow-lg shadow-black" src={recipe.strMealThumb} alt="Food Image"></img>
                                    <div className="flex items-center justify-center gap-2 pt-2">
                                        <p className=" text-center text-white font-courgette text-xl lg:text-2xl truncate">{recipe.strMeal}</p>
                                        <button onClick={() => removeFavorite(recipe.idMeal)} className="text-2xl lg:text-3xl text-red-800 hover:text-red-200 hover:cursor-pointer"><FontAwesomeIcon icon={faHeart} /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default FavoritePage