import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';         // <== IMPORT

export default function CountryDetails(props) {

  const [foundCountry, setFoundCountry] = useState();
  const { countryId } = useParams();

  console.log('Country Id', countryId);  
  console.log("Countries", props.countries)

   useEffect(() => {                                      // <== ADD
     const country = props.countries.find((object) => {
       return object.alpha3Code === countryId;
     })

     if (country) {
       setFoundCountry(country)
     }
 }, [countryId]);
        
 console.log("country ID", countryId)
 console.log("found country", foundCountry)

//  let flagLink = `https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`
// console.log("flag", flagLink)

  return (
    <div>
      <h1>Country Details</h1>

      {!foundCountry && <h3>Country not found!</h3>}
     
      {/* <img src={flagLink} alt="flag"></img> */}
      <h3>{foundCountry.name.common}</h3>
      <p><b>Capital: </b>{foundCountry.capital}</p>
      <p><b>Area: </b>{foundCountry.area} km2</p>
      <p><b>Borders: </b>
      <ul>
        { foundCountry.borders.map(border => {
          return (
            <li key={border}>
                <Link to={`/${border}`}>{border}</Link>
            </li>
          )
          })
        }
      </ul>
      </p> */}

      <Link to="/countries">Back</Link>

    </div>
  );
}
