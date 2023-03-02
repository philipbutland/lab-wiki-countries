import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react'

export default function CountriesList(props) {

  const  [ countries, setCountries]  = useState (null);

  useEffect(() => {
    setCountries(props.countries);}, []);
    console.log(countries)

  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <div className="list-group">
          <h2>Countries</h2>

           {countries && countries.map((country) => {
              return (
                <div key={country.alpha3Code}>
                <Link to={`/countries/${country.alpha3Code}`}>
                  {country.name.official}
                </Link>
                </div>
            )
          })}



          </div>
        </div>
      </div>
    </div>
  );
}
