import React from "react";
const DisplayComponent = ({
  filteredInfo,
  loadingStatus,
  displayError,
  headerList,
}) => {
  if (loadingStatus)
    return (
      <>
        <h3>Loading data....!</h3>
        {console.log("hhy")}
      </>
    );

  if (displayError !== "") {
    return <h3>{displayError}</h3>;
  }

  if (filteredInfo.length === 0) {
    return <h3>No results found</h3>;
  }

  return (
    <div style={{ marginTop: "10px" }}>
      <table cellPadding="10" border={1} cellSpacing={0}>
        <thead>
          <tr>
            {headerList.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {filteredInfo?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.completed ? "Completed" : "Not Completed"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayComponent;
