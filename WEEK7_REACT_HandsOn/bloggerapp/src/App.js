import React from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import { books } from './booksData';

function App() {
  const showAll = true; // Change to false to test conditional rendering

  return (
    <div className="App">
      {showAll && <BookDetails books={books} />}
      {showAll ? <BlogDetails /> : <p>No blogs to show</p>}
      {showAll && <CourseDetails />}
    </div>
  );
}

export default App;
