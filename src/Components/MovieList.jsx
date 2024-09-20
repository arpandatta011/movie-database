import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://dummyapi.online/api/movies');
      const data = await response.json();
      setMovies(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className="container">
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
