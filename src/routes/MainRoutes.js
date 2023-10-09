import React from 'react'
import HomePage from '../pages/HomePage'
import CategoriesPage from '../pages/CategoriesPage';
import BeefPage from '../pages/categories/BeefPage'
import BreakfastPage from '../pages/categories/BreakfastPage'
import ChickenPage from '../pages/categories/ChickenPage';
import LambPage from '../pages/categories/LambPage';
import PastaPage from '../pages/categories/PastaPage';
import SeafoodsPage from '../pages/categories/SeafoodsPage'
import VegetarianPage from '../pages/categories/VegetarianPage';
import SidePage from '../pages/categories/SidePage';
import DessertPage from '../pages/categories/DessertPage'
import AboutUsPage from '../pages/AboutUsPage'
import FavoritePage from '../pages/FavoritePage';
import SearchedMealsPage from '../pages/SearchedMealsPage';
import ShowInfoPage from '../pages/ShowInfoPage';
import CountryPage from '../pages/CountryPage';
import LetterPage from '../pages/LetterPage';
import { Routes, Route } from 'react-router-dom';

function MainRoutes() {
    return (
        <Routes>
            <Route exact path='/HomePage' element={<HomePage />} />
            <Route path='/CategoriesPage' element={<CategoriesPage />} />
            <Route path='/BeefPage' element={<BeefPage />} />
            <Route path='/BreakfastPage' element={<BreakfastPage />} />
            <Route path='/ChickenPage' element={<ChickenPage />} />
            <Route path='/LambPage' element={<LambPage />} />
            <Route path='/PastaPage' element={<PastaPage />} />
            <Route path='/SeafoodPage' element={<SeafoodsPage />} />
            <Route path='/SidePage' element={<SidePage />} />
            <Route path='/VegetarianPage' element={<VegetarianPage />} />
            <Route path='/DessertPage' element={<DessertPage />} />
            <Route path='/AboutUsPage' element={<AboutUsPage />} />
            <Route path='/FavoritePage' element={<FavoritePage />} />
            <Route path='/ShowInfoPage' element={<ShowInfoPage />} />
            <Route path='/SearchedMealsPage' element={<SearchedMealsPage />} />
            <Route path='/CountryPage/:name' element={<CountryPage />} />
            <Route path='/LetterPage/starts-with/:letter' element={<LetterPage />} />
        </Routes>
    )
}

export default MainRoutes
