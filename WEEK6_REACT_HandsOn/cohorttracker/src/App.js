import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  const cohortList = [
    {
      name: "INTADMDF10 - .NET FSD",
      startDate: "22-Feb-2022",
      currentStatus: "Scheduled",
      coach: "Aashma",
      trainer: "Jojo Jose"
    },
    {
      name: "ADM21JF014 - Java FSD",
      startDate: "10-Sep-2021",
      currentStatus: "Ongoing",
      coach: "Apoorv",
      trainer: "Elisa Smith"
    },
    {
      name: "CDBJF21025 - Java FSD",
      startDate: "24-Dec-2021",
      currentStatus: "Ongoing",
      coach: "Aashma",
      trainer: "John Doe"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cohorts Details</h1>
      {cohortList.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
