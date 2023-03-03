import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';         // <== IMPORT


export default function CountryDetails(props) {

  const [foundCountry, setFoundCountry] = useState(null);
  const { countryId } = useParams();

  console.log('Country Id', countryId);  

  useEffect(() => {                                      // <== ADD
    const ourCountry = props.countries.find((object) => {
      return object.alpha3Code === countryId;
    })

    if (ourCountry) {
      setFoundCountry(ourCountry)
    }
    console.log(ourCountry)
}, [countryId]) 
        

  return (
    <div>
      <h1>Country Details</h1>
      <h3>{foundCountry.name.common}</h3>
      <p><b>Capital: </b>{foundCountry.capital}</p>
      <Link to="/countries">Back</Link>
    </div>
  );
}
