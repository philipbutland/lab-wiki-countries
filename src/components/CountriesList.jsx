import { Link } from 'react-router-dom';
import {useEffect} from 'react'

export default function CountriesList(props) {

  const  [ countries, setCountries]  = useState ([]);

  useEffect(() => {
    setCountries(props.countries);}, [props.countries]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-5" style="max-height: 90vh; overflow: scroll">
          <div className="list-group">
          <h2>Countries</h2>
          {countries.map((country) => {
              return (
                <div key={country.alpha3Code}>
                <Link to{"/countries/${country.alpha3Code}"}>
                  {countries.name.official}
                </Link>
                </div>
            )
          }))



          </div>
        </div>
      </div>
    </div>
  );
}
