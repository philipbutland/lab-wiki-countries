import './App.css';
import CountriesData from './countries.json';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';

function App() {
  return (

    <div classNameName="App">
       <Navbar></Navbar>

       <Routes>
        <Route path="/countries" element={<CountriesList countries={CountriesData}></CountriesList>} />
         </Routes> 
     </div>
  );
}

export default App;

