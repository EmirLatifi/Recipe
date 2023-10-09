import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { RecipeContext } from '../App';


function LetterPage() {

    const recipeContext = useContext(RecipeContext);
    const { favoriteRecipe, setFavoriteRecipe, onClickGetId } = recipeContext;

    const [startWithLetter, setStartWithLetter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [noResults, setNoResults] = useState(false);
    const { letter } = useParams();


    const onClickFavorite = (idMeal) => {
        if (favoriteRecipe.some((recipe) => recipe.idMeal === idMeal)) {
            alert("You have added this emoji before ");
            return;
        }
        const favorite = startWithLetter.find((recipe) => recipe.idMeal === idMeal);
        setFavoriteRecipe((prevRecipes) => [...prevRecipes, favorite])
    }

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
            const data = response.data.meals;
            if (data) {
                setStartWithLetter(data);
            } else {
                setStartWithLetter(data);
                setNoResults(true);
            }

            setTimeout(() => {
                setLoading(false)
            }, 800)

        } catch {
            alert(`there is no recipe that starts with letter ${letter} `);
        }
    };

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
                        <div>
                            {noResults ? (
                                <p className=" text-3xl text-center font-crimson py-10">
                                    There are no recipes with this letter.
                                </p>
                            ) :
                                (
                                    <>
                                        <h3 className="text-center text-3xl lg:text-5xl font-marck pt-10">Recipe starts with letter: {letter}</h3>
                                        <div className="w-10/12 grid grid-cols-2 sm:grid-cols-3 mx-auto pt-10 gap-x-10 gap-y-4 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:grid-cols-4">
                                            {startWithLetter.map(recipe => (
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
                                    </>)

                            }
                        </div>
                    </>
                )
            }
        </>

    )
}

export default LetterPage;