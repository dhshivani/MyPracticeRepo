import React from 'react';
import { players } from './data';

function App() {
  // Merge two sample arrays
  const team1 = ["Kohli", "Rohit"];
  const team2 = ["Dhoni", "Sachin"];
  const mergedPlayers = [...team1, ...team2];

  return (
    <div>
      <h1>List of Players</h1>
      <ul>
        {players.map((item, index) => (
          <li key={index}>{item.name} - {item.score}</li>
        ))}
      </ul>

      <h1>List of Players having Scores Less than 70</h1>
      <ul>
        {players
          .filter(item => item.score < 70)
          .map((item, index) => (
            <li key={index}>{item.name} - {item.score}</li>
          ))}
      </ul>

      <h1>Indian Players</h1>

      <h3>Odd Team</h3>
      <ul>
        {players
          .filter((_, index) => index % 2 !== 0)
          .map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
      </ul>

      <h3>Even Players</h3>
      <ul>
        {players
          .filter((_, index) => index % 2 === 0)
          .map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
      </ul>

      <h1>List of Indian Players Merged</h1>
      <ul>
        {mergedPlayers.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
