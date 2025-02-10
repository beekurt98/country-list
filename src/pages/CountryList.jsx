import { createContext, useContext, useEffect, useState } from 'react'
// import { data } from './../data.jsx'
import { Outlet, Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
// TO-DO
// input fields
// population dots

const PostContext = createContext()

export default function CountryList() {
  
  return (
    <>
      <Header />
      <Container />
    </>
  )
}

function Container() {
  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    async function getData() {
      const countryData = await fetch('./src/data.json').then(r => r.json())
      setPosts(countryData)
      setAllPosts(countryData)

    }
    getData()
  }, [])

  function handleSearch(term) {
    setPosts(allPosts.filter(post => post.name.common.toLowerCase().includes(term.toLowerCase()) && post.region == term))
  }

  

  return (
    <div className="content-container">
      <PostContext.Provider value={{ handleSearch, posts, allPosts, setPosts }}>
        <SearchCont />
        <CountryContainer />
      </PostContext.Provider>
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
  const { posts, allPosts, setPosts, handleSearch } = useContext(PostContext)

  return (
    <div className="search-bar">
      {searchSvg}
      <input onChange={(e) => handleSearch(e.target.value)} className='search-input' type='text' name="countrySearch" placeholder="Search for a country..." />
    </div>
  )
}

function Dropdown() {
  const { posts, allPosts, setPosts, handleSearch } = useContext(PostContext)

  return(
    <div className="dropdown">
      <label></label>
      <select onChange={(e) => handleSearch(e.target.value)}>
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
  const { posts } = useContext(PostContext)

  return(
    <div className="country-container">
      {
        posts.map((country) => (
          <div className="country-card" key={country.cca2}>
            <CountryCard cca2={country.cca2} name={country.name.common} population={country.population} region={country.region} capital={country.capital} flagUrl={country.flags.png} flagAlt={country.flags.alt} />
          </div>
        ))
      }
    </div>
  )
}

function CountryCard({ cca2, name, population, region, capital, flagUrl, flagAlt }) {
  const countryName = name.split(" ").join("-").toLowerCase()

  return(
    <>
      <div className="flag-div">
        <img src={flagUrl} alt={flagAlt} /></div>
      <div className='country-info'>
        <Link className='countryName' to={`/country/${countryName}/${cca2}`}>{name}</Link>
        <Outlet />
        <p className="info population">
          <strong>Population: </strong>{population}<br />
        </p>
        <p className="info region"><strong>Region:</strong> {region}</p>
        <p className="info capital"><strong>Capital:</strong> {capital}</p>
      </div>
    </>
  )
}


const searchSvg = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z" fill="#848484"/>
</svg>