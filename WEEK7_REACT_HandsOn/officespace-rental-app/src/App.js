import React from 'react';

function App() {
  const officeList = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "Regus", Rent: 65000, Address: "Bangalore" },
    { Name: "WeWork", Rent: 55000, Address: "Mumbai" }
  ];

  return (
    <div className="App">
      <h1>Office Space , at Affordable Range</h1>
      <img
        src="https://www.officesnapshots.com/wp-content/uploads/2021/10/office-feature.jpg" width="25%" height="25%" alt="Office Space"
      />

      {officeList.map((item, index) => {
        const rentStyle = {
          color: item.Rent <= 60000 ? "red" : "green"
        };

        return (
          <div key={index}>
            <h2>Name: {item.Name}</h2>
            <h3 style={rentStyle}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
