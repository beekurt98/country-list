import { useState } from 'react'
import './main.css'
import { Routes, Route, Link } from 'react-router-dom';

import CountryList from './pages/CountryList'
import CountryDetails from './pages/CountryDetails'
// TO-DO
// input fields
// population dots

export default function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<CountryList />} />
      <Route path={"/country/:countryName/:cca2"} element={<CountryDetails />} />
      
    </Routes>  
    </>
  )
}
