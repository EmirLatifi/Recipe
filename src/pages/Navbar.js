import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faBars, faXmark, faHouse, faBurger, faMagnifyingGlass, faUsers, faCartPlus, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { RecipeContext } from '../App';



function Navbar() {
    const recipeContext = useContext(RecipeContext);

    const { searchFunction } = recipeContext
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [searchMeals, setSearchMeals] = useState("");

    const onChangeSearch = (e) => {
        setSearchMeals(e.target.value);
    }

    const onClickSearch = () => {
        searchFunction(searchMeals);
        navigate('/SearchedMealsPage');
        setSearchMeals("")
    }

    const onClickSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="w-full h-36 md:h-auto sticky top-0 z-50 px-4 py-7 bg-neutral-700">
            <nav className="w-full h-full relative flex justify-between md:items-center gap-5">
                <div className=" md:w-3/12 h-11 flex">
                    <FontAwesomeIcon icon={faUtensils} className="text-white text-4xl" />
                    <p className="font-serif text-white text-4xl ml-2">Recipes</p>
                </div>
                <div className=" md:w-6/12 h-11 hidden pt-2 md:block">
                    <div className="w-full flex justify-end space-x-5 md:justify-center lg:space-x-8 xl:space-x-12 text-white">
                        <Link className="link" to="/HomePage">Home</Link>
                        <Link className="link" to="/CategoriesPage">Categories</Link>
                        <Link className="link" to="/AboutUsPage">About us</Link>
                        <Link className="link text-xl" to="/FavoritePage"><FontAwesomeIcon icon={faBookmark} /></Link>
                    </div>
                </div>
                <div className="w-full h-11 flex absolute top-14 md:w-3/12 md:static">
                    <div className="w-full h-11 flex relative ">
                        <input
                            type="text"
                            value={searchMeals}
                            onChange={onChangeSearch}
                            className="w-full h-full bg-white outline-none text-gray-900 pl-3 rounded-md "
                            placeholder="Search..." />
                        <button onClick={onClickSearch} className="absolute right-3 top-2.5">
                            <FontAwesomeIcon className="text-lg" icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
                <div className="md:hidden">
                    <button type="button" className=" text-3xl" onClick={onClickSidebar}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </nav>

            <div className={`relative z-50 md:hidden ${isOpen ? "" : "hidden"}`}>
                <div className="fixed inset-0 bg-gradient-to-r from-red-400 to-red-600">
                    <div className="fixed top-0 left-0 bottom-0 flex flex-col w-full md:w-2/4 opacity-100">
                        <div className="h-32 flex justify-between items-center bg-neutral-700 px-4">
                            <div className="flex">
                                <FontAwesomeIcon icon={faUtensils} className="text-3xl text-white" />
                                <p className="font-serif text-3xl text-white ml-2">Recipes</p>
                            </div>
                            <button className="h-auto text-white text-3xl" onClick={onClickSidebar}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        <div className="h-80 py-4 px-2">
                            <div className="w-full h-full flex flex-col justify-around">
                                <div>
                                    <FontAwesomeIcon className="w-10 text-2xl mr-2" icon={faHouse} />
                                    <Link to="/HomePage" onClick={onClickSidebar} className="text-2xl">Home</Link>
                                </div>
                                <div>
                                    <FontAwesomeIcon className="w-10 text-2xl mr-2" icon={faBurger} />
                                    <Link to="/CategoriesPage" onClick={onClickSidebar} className="text-2xl">Categories</Link>
                                </div>
                                <div>
                                    <FontAwesomeIcon className="w-10 text-2xl mr-2" icon={faUsers} />
                                    <Link to="/AboutUsPage" onClick={onClickSidebar} className="text-2xl">About us</Link>
                                </div>
                                <div>
                                    <FontAwesomeIcon className="w-10 text-2xl mr-2" icon={faCartPlus} />
                                    <Link to="/FavoritePage" onClick={onClickSidebar} className="text-2xl">Favorite</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navbar
