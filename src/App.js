
import './App.css';


import useFetchRequiredData from './hooks/useFetchRequiredData';
import SearchComponent from './components/SearchComponent';
import DisplayComponent from './components/DisplayComponent';


function App() {
  const {data, filteredData, handleSearchClick, loading, error} = useFetchRequiredData();

  return (
    <div className="container">
      <SearchComponent handleSearch={handleSearchClick} />
      <DisplayComponent filteredInfo={filteredData} loadingStatus={loading} displayError={error} />
    </div>
  );
}

export default App;

