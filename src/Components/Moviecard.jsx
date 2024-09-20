import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={movie.image} className="card-img-top" alt={movie.movie} />
        <div className="card-body">
          <h5 className="card-title">{movie.movie}</h5>
          <p className="card-text">Rating: {movie.rating}</p>
          <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View on Movie Data
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
