import { faCircleXmark, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { BeatLoader, CircleLoader } from 'react-spinners';
import { RecipeContext } from '../App';


function ShowRecipeModal({ open, close }) {

    const recipeContext = useContext(RecipeContext);
    const { favoriteRecipe, setFavoriteRecipe, onClickGetId } = recipeContext;

    const [randomRecipe, setRandomRecipe] = useState([]);
    const [loading, setLoading] = useState(true);

    const onClickFavorite = (idMeal) => {
        if (favoriteRecipe.some((recipe) => recipe.idMeal === idMeal)) {
            alert("You have added this recipe before ");
            return;
        }
        const favorite = randomRecipe.find((recipe) => recipe.idMeal === idMeal);
        setFavoriteRecipe((prevRecipes) => [...prevRecipes, favorite])
    }


    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`);
            const data = response.data.meals;
            setRandomRecipe(data);
            setTimeout(() => {
                setLoading(false)
            }, 1500)

        } catch (error) {
            console.error(error);
            setLoading(false)
        };
    }

    return (
        <div className={`bg-gradient-to-r from-red-400 to-red-600 openModal ${open ? 'open' : ''}`}>
            {loading ?
                (
                    <div className="flex flex-col items-center pt-44 md:pt-36">
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
                    <div className="h-full flex flex-col justify-center items-center">
                        <h3 className="text-4xl lg:text-5xl font-marck pb-16">Best recipe for today is: </h3>
                        {randomRecipe.map((recipe) => (
                            <div key={recipe.idMeal} className="">
                                <img onClick={() => onClickGetId(recipe.idMeal)} className="w-60 lg:w-80 link cursor-pointer mx-auto rounded-[50%]" src={recipe.strMealThumb}></img>
                                <div className="flex items-center justify-center gap-4 pt-6">
                                    <p className=" text-center font-courgette text-2xl lg:text-3xl truncate">{recipe.strMeal}</p>
                                    <button onClick={() => onClickFavorite(recipe.idMeal)} className="text-2xl lg:text-3xl text-red-800 hover:text-red-200 hover:cursor-pointer"><FontAwesomeIcon icon={faHeart} /></button>
                                </div>
                            </div>
                        ))}
                        <div className="close text-3xl text-black cursor-pointer hover:text-red-900 " onClick={close}><FontAwesomeIcon icon={faCircleXmark} /></div>
                    </div>
                )}
        </div>

    )
}

export default ShowRecipeModal