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
    <div className="header-div">
      <div className="header-in">
        <h1>Where in the world?</h1>
        <LightSwitch />
      </div>
    </div>
  )
}

function LightSwitch() {
  const [nextTheme, setNextTheme] = useState("Dark");
  
  function handleClick() {
    let domBody = document.querySelector("body")
    if (nextTheme == "Dark") {
      setNextTheme("Light")
      
      domBody.classList.remove("light")
      domBody.classList.add("dark")
    } else {
      setNextTheme("Dark")
      domBody.classList.remove("dark")
      domBody.classList.add("light")
    }
    
  }
  return(
      <div className='mode-switch' onClick={handleClick}>
        <svg width="13.5" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5532 10.815C7.66857 10.815 4.51929 7.92783 4.51929 4.36821C4.51929 3.0253 4.96679 1.78158 5.73143 0.75C2.69036 1.69515 0.5 4.33122 0.5 7.43807C0.5 11.3385 3.94929 14.5 8.20357 14.5C11.5929 14.5 14.4696 12.4932 15.5 9.70452C14.375 10.4048 13.0161 10.815 11.5532 10.815Z"/>
        </svg>
        {nextTheme} Mode
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
      <div className='country-info'>
        <p className="countryName">{name}</p>
        <p className="info population">
          <strong>Population: </strong>{population}<br />
        </p>
        <p className="info region"><strong>Region:</strong> {region}</p>
        <p className="info capital"><strong>Capital:</strong> {capital}</p>
      </div>
    </>
  )
}



export default App
