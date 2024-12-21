import { useState } from 'react'
import './main.css'
import { data } from './data.jsx'

// TO-DO
// input fields
// population dots

function App() {
  
  return (
    <>
      <Header />
      <Container />
    </>
  )
}

function Header() {
  return (
    <div className="header">
      <h1>Where in the world?</h1>
      <div>Dark Mode</div>
    </div>
  )
}

function Container() {
  return (
    <div className="content-container">
      <SearchCont />
      <CountryContainer />
    </div>
  )
}

function SearchCont() {
  return (
    <div className="search-cont">
      <SearchBar />
      <Dropdown />
    </div>
  )
}

function SearchBar() {
  return (
    <div className="search-bar">
      <img src="./search.svg" />
      <input className='search-input' type='text' name="countrySearch" placeholder="Search for a country..." />
    </div>
  )
}

function Dropdown() {
  return(
    <div className="dropdown">
      <label></label>
      <select>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}

function CountryContainer() {
  return(
    <div className="country-container">
      {
        data.map((country) => (
          <div className="country-card" key={country.cca2}>
            <CountryCard name={country.name.common} population={country.population} region={country.region} capital={country.capital} flagUrl={country.flags.png} flagAlt={country.flags.alt} />
          </div>
        ))
      }
    </div>
  )
}

function CountryCard({ name, population, region, capital, flagUrl, flagAlt }) {
  
  return(
    <>
      <div className="flag-div"><img src={flagUrl} alt={flagAlt} /></div>
      <p className="countryName">{name}</p>
      <p className="info population">
        <strong>Population:</strong>
        {population}<br />
        {/* {numDots(population)} */}
      </p>
      <p className="info region"><strong>Region:</strong> {region}</p>
      <p className="info capital"><strong>Capital:</strong> {capital}</p>
    </>
  )
}



export default App
