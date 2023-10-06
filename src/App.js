import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getRecipesInStorage, setRecipesInStorage } from './utils/FavoriteRecipes';
import MainRoutes from './routes/MainRoutes';
import Navbar from './pages/Navbar'



export const RecipeContext = React.createContext()

function App() {

  const navigate = useNavigate();

  const [info, setInfo] = useState()
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [favoriteRecipe, setFavoriteRecipe] = useState(getRecipesInStorage());

  useEffect(() => {
    setRecipesInStorage(favoriteRecipe)
  }, [favoriteRecipe]);

  const onClickGetId = (item) => {
    setInfo(item)
    navigate("/ShowInfoPage")
  }

  const searchFunction = (s) => {
    setSearch(s);
  }

  return (
    <div className="App">
      <div className="min-h-screen bg-gradient-to-r from-red-400 to-red-600">
        <RecipeContext.Provider value={
          {
            search,
            searchFunction,
            favoriteRecipe,
            setFavoriteRecipe,
            onClickGetId,
            info,
            setInfo,
            loading,
            setLoading
          }
        }>
          <Navbar />
          <MainRoutes />
        </RecipeContext.Provider>
      </div>
    </div>
  )
}

export default App