import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { BeatLoader } from 'react-spinners';
import { RecipeContext } from '../App';

function ShowInfoPage() {
    const recipeContext = useContext(RecipeContext);
    const { info } = recipeContext;

    const [ingredients, setIngredients] = useState([]);
    const [measures, setMeasures] = useState([]);
    const [showInfo, setShowInfo] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${info}`);
            const data = response.data.meals;

            if (data && data.length > 0) {
                const item = data[0];

                const ingredientEntries = Object.entries(item).filter(
                    (item) => {
                        const [key, value] = item;
                        return key.startsWith('strIngredient') && value
                    }

                );

                const measureEntries = Object.entries(item).filter(
                    ([key, value]) => key.startsWith('strMeasure') && value
                );

                const ingredientNames = ingredientEntries.map(([_, ingredient]) => ingredient);
                const measureNames = measureEntries.map(([_, measure]) => measure);

                setShowInfo([item]);
                setIngredients(ingredientNames);
                setMeasures(measureNames);

                setTimeout(() => {
                    setLoading(false)
                }, 800)
            }
        } catch (error) {
            console.error(error);

        };
    }

    const ingredientsCarouselItems = ingredients.map((ingredient, index) => (
        <div key={index} className="pt-2">
            <img className="w-20 mx-auto md:w-24 xl:w-28 link cursor-pointer" src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} alt={ingredient} />
            <p className="text-center ">{ingredient} : <br></br><span>{measures[index]}</span></p>
        </div>
    ));

    return (
        <div>
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
                        {showInfo.map((item) => (
                            <div key={item.idMeal} className="w-11/12 lg:w-10/12 flex flex-col mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 pt-10">
                                    <div className="recipe-img w-80 mx-auto md:mx-0 xl:w-96">
                                        <img src={item.strMealThumb} className="rounded-xl mx-auto" alt={item.strMeal} />
                                        <h3 className="text-xl text-center font-courgette pt-2">{item.strMeal}</h3>
                                    </div>
                                    <div className=" h-full pt-10 md:pt-0 flex flex-col items-center">
                                        <h3 className="text-5xl text-center font-marck pb-5 md:pb-0">Ingredients</h3>
                                        <AliceCarousel
                                            mouseTracking
                                            items={ingredientsCarouselItems}
                                            responsive={{
                                                0: { items: 3 },
                                                1500: { items: 4 }
                                            }}
                                            disableButtonsControls
                                        />
                                    </div>
                                </div>
                                <div className="pt-10">
                                    <h3 className="text-5xl text-center font-marck pb-5">Preparation</h3>
                                    <p className="text-center font-crimson text-lg tracking-wide pb-5 ">{item.strInstructions}</p>
                                </div>
                                <div className="mx-auto link py-5">
                                    <a href={item.strYoutube} target="_blank" className=" bg-neutral-700 text-white hover:bg-green-500 p-2 rounded-lg ">See video</a>
                                </div>
                            </div>
                        ))}
                    </>
                )}
        </div>
    );
}

export default ShowInfoPage