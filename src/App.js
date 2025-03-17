// import logo from './logo.svg';
// import './App.css';


// import FetchData from './components/FetchData';
// function App() {
//   return (
//     <div className="container">
      
//       <FetchData/>
//     </div>
//   );
// }

// export default App;



//CODE WRITTEN USING TE CUSTOM HOOK
import './App.css';


import useFetchRequiredData from './hooks/useFetchRequiredData';
import SearchComponent from './components/SearchComponent';
import DisplayComponent from './components/DisplayComponent';

function App() {
  const {data, filteredData, handleSearchClick, loading, error, setError} = useFetchRequiredData();

  return (
    <div className="container">
      <SearchComponent handleSearch={handleSearchClick}/>
      <DisplayComponent filteredInfo={filteredData} loadingStatus={loading} displayError={error} setError={setError}/>
    </div>
  );
}

export default App;

