import "../App.css";
import { useEffect, useState } from "react";

import useFetchRequiredData from "../hooks/useFetchRequiredData";
import SearchComponent from "./SearchComponent";
import DisplayComponent from "./DisplayComponent";
import UserSelector from "./UserSelector";

import { fetchUserHeaders } from "../api/fetchUsers";

function MainComponent() {
  const { filteredData, handleSearchClick, loading, error, setError } =
    useFetchRequiredData();

  const [selectedUser, setSelectedUser] = useState("");
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    async function getHeaders() {
      try {
        const headersList = await fetchUserHeaders(selectedUser);
        setHeaders(headersList);
      } catch (e) {
        setError(e);
      }
    }
    getHeaders();
  }, [selectedUser]);

  return (
    <div className="container">
      <UserSelector
        selectedUser={selectedUser}
        onUserChange={setSelectedUser}
        setError={setError}
      />
      <SearchComponent handleSearch={handleSearchClick} />
      <DisplayComponent
        filteredInfo={filteredData}
        loadingStatus={loading}
        displayError={error}
        headerList={headers}
      />
    </div>
  );
}

export default MainComponent;
