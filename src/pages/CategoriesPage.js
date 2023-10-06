import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import Carousel from '../components/Carousel';

function CategoriesPage() {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true);
    const allCategories = [
        {
            id: 1,
            img: "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg",
            name: "Beef",
        },
        {
            id: 2,
            img: "https://cdn.pixabay.com/photo/2017/03/27/13/54/bread-2178874_960_720.jpg",
            name: "Breakfast",
        },
        {
            id: 3,
            img: "https://cdn.pixabay.com/photo/2016/07/31/17/51/chicken-1559548_960_720.jpg",
            name: "Chicken",
        },
        {
            id: 4,
            img: "https://cdn.pixabay.com/photo/2016/03/05/20/07/abstract-1238657_960_720.jpg",
            name: "Lamb",
        },
        {
            id: 5,
            img: "https://cdn.pixabay.com/photo/2014/04/22/02/55/pasta-329521_960_720.jpg",
            name: "Pasta",
        },
        {
            id: 6,
            img: "https://cdn.pixabay.com/photo/2014/05/26/14/53/sushi-354628_960_720.jpg",
            name: "Seafood",
        },
        {
            id: 7,
            img: "https://cdn.pixabay.com/photo/2021/01/22/06/07/kimchi-5939202_640.jpg",
            name: "Side",
        },
        {
            id: 8,
            img: "https://cdn.pixabay.com/photo/2016/08/18/18/40/salad-1603608_960_720.jpg",
            name: "Vegetarian",
        },
        {
            id: 9,
            img: "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg",
            name: "Dessert",
        }

    ]

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    })

    const onClickCategory = (id) => {
        navigate(`/${allCategories.find((category) => category.id === id)?.name + "Page"}`);
    };

    return (
        <div className="bg-gradient-to-r from-red-400 to-red-600 h-screen flex flex-col justify-between">
            {loading ?
                (
                    <div className="flex flex-col items-center justify-center pt-10 ">
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
                        <div className="grid mx-auto p-10 gap-10 grid-cols-2 sm:grid-cols-3">
                            {allCategories.map((category) => (
                                <div onClick={() => onClickCategory(category.id)} key={category.id} className=" ">
                                    <img
                                        className="w-44 md:w-48 lg:w-52 xl:w-60 link cursor-pointer rounded-lg shadow-lg shadow-gray-900 dark:border-gray-900 "
                                        src={category.img}
                                    >
                                    </img>
                                    <p className=" text-center text-black font-semibold truncate pt-3">{category.name}</p>
                                </div>
                            ))}
                        </div>
                        <Carousel />
                    </>
                )}
        </div>
    )
}

export default CategoriesPage