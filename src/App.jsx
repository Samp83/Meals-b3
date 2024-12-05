import { useState, useEffect } from 'react'
//import Header from './Header.jsx'
//import Footer from './Footer.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Coucou from './pages/Coucou'
import Contact from './pages/Contact'
import RandomRecipes from './pages/RandomRecipe'
import AllRecipes from './pages/AllRecipes'
import ShowMealPage from './pages/ShowMealPage'
import MealsSearchResults from './pages/searchResults'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coucou />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/randomRecipe" element={<RandomRecipes />} />
        <Route path="/allRecipes" element={<AllRecipes />} />
        <Route path="/Recipe/:id" element={<ShowMealPage />} />
        <Route path="/search-results/" element={<MealsSearchResults />} />
      </Routes>
    </BrowserRouter>
  
  )
}

export default App