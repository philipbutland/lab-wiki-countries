import './App.css';
import CountriesData from './countries.json';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (

    <div className="App">
       <Navbar></Navbar>

        <Routes>
          <Route path="/countries" element={<CountriesList countries={CountriesData}></CountriesList>} />
          <Route path='/countries/:countryId' element={<CountryDetails countries={CountriesData}></CountryDetails>} />
        </Routes> 
     </div>
  );
}

export default App;

