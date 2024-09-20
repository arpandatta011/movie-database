import React from 'react';
import MovieList from './Components/MovieList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="container py-5">
        <h1 className="text-center mb-5 fon">Movie Database</h1>
        <MovieList />
      </div>
    </div>
  );
};

export default App;
