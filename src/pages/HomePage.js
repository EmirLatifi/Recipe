import React, { useState } from 'react';
import RecipeImg from "../img/Recipe.png";
import 'react-alice-carousel/lib/alice-carousel.css';
import ShowRecipeModal from '../components/ShowRecipeModal';


function HomePage() {

    const [showRecipe, setShowRecipe] = useState(false);

    const onClickOpen = () => {
        setShowRecipe(true)
    }

    const onClickClose = () => {
        setShowRecipe(false)
    }

    return (
        <div className="flex flex-col justify-between">
            <div className="md:h-[415px] w-10/12 lg:w-9/12 xl:w-8/12 mx-auto flex flex-col items-center md:flex-row gap-5 pt-10">
                <div className="">
                    <h3 className="pb-5 text-center text-3xl lg:text-4xl font-marck">
                        "Where flavor meets passion:<br></br>
                        Unleash your inner chef"
                    </h3>
                    <p className="text-center text-xl font-crimson">Indulge in a symphony of tastes and aromas, as invites you on an extraordinary culinary journey. From stove to table, our recipes breathe life into your kitchen, transforming everyday cooking into a delightful adventure.</p>
                </div>
                <img className="w-60 lg:w-80 2xl:w-96" src={RecipeImg} />
            </div>
            <div className="flex pt-10">
                <button onClick={onClickOpen} className="w-fit link mx-auto bg-neutral-700 text-white p-2 rounded-lg">Best recipe for today</button>
                <ShowRecipeModal open={showRecipe} close={onClickClose} />
            </div>
        </div>
    )

}

export default HomePage




