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


import useFetchRequiredData from './CustomHook/FetchRequiredData';
import SearchComponent from './CustomHook/SearchComponent';
import DisplayComponent from './CustomHook/DisplayComponent';

function App() {
  const {data, filteredData, handleSearchClick} = useFetchRequiredData();

  return (
    <div className="container">
      <SearchComponent handleSearch={handleSearchClick}/>
      <DisplayComponent filteredInfo={filteredData}/>
    </div>
  );
}

export default App;

