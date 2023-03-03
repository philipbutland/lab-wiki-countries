import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';         // <== IMPORT

export default function CountryDetails(props) {

  const [foundCountry, setFoundCountry] = useState();
  const { countryId } = useParams();
  let flagLink = ""

  useEffect(() => {                                      // <== ADD

     const country = props.countries.find((object) => {
       return object.alpha3Code === countryId;
     })

     if (country) {
       setFoundCountry(country)
     }
 }, [countryId]);

 if (foundCountry) {
    flagLink = `https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`
 }

  return (
    <div>
      <h1>Country Details</h1>

      {!foundCountry && <h3>Country not found!</h3>}

      {foundCountry && (
        <div className = "countryInfo">
          <img src={flagLink} alt="flag" className='big-flag'/>
          <h3>{foundCountry.name.common}</h3>
          <p><b>Capital: </b>{foundCountry.capital}</p>
          <p><b>Area: </b>{foundCountry.area} km<sup>2</sup></p>
          <p><b>Borders: </b>
            <ul className="borders">
              {foundCountry.borders.map((border) => {
                return (
                  <li key={border}><Link to={`/${border}`}>{border}</Link></li>
                )}
              )}
            </ul>
          </p> 

          <Link to="/countries">Back</Link>
        </div>
      )}

    </div>
  )

}
