import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';
import { data } from './../data.jsx'
import Header from '../components/Header.jsx';

export default function CountryDetails() {
  const { countryName, cca2 } = useParams()
  // console.log(countryName)
  const countryFullName = countryName.split("-").map(word => word.at(0).toUpperCase() + word.slice(1)).join(" ")
  console.log(cca2);

  const country = data.find(country => country.cca2 == cca2);
  const nativeName = Object.values(country.name.nativeName)[0].common;

  const borders = country.borders?.map(border => data.find(x => x.cca3 == border))
  console.log(borders)
  console.log(country.borders)
  return (
    <>
    <Header />
      <div className="country-details-main-cont">

        <Link to="/">Back</Link>
        <Outlet />
        <div className="country-detail-cont">
          <div className="left-detail">
            <img src={country.flags.png} />
          </div>
          <div className="right-detail">
            <h3> {countryFullName} </h3>
            <div className="info-cont ">
              <div className="il">
                <p>Native Name: {nativeName}</p>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Sub Region: {country.subregion}</p>
                <p>Capital: {country.capital}</p>
              </div>

              <div className="ir">
                <p>Top Level Domain: {country.tld}</p>
                <p>Currencies: {Object.keys(country.currencies)[0]}</p>
                <p>Languages: {Object.keys(country.languages)[0]}</p>

              </div>

            </div>
            <div className="borders">
              <p>
                Border Countries:
                {
                  !borders
                    ? " No borders"
                    : borders?.map(border => <span>{border.name.common}</span>)
                }
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}