import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
      <h2>
        Redux Movies
      </h2>
      <div className="container">
        <MovieList />
        <MovieDetails />
      </div>
    </div>
  );
}

export default App;
