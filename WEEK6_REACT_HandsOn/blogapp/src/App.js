import React from 'react';
import './App.css';
import Posts from './Components/Posts'; // ✅ Import your Posts component

function App() {
  return (
    <div className="App">
      <h1>Student Management Portal</h1>
      <Posts />  {/* ✅ Render the Posts component */}
    </div>
  );
}

export default App;