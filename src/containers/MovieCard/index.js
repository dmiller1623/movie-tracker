import React from 'react';

const MovieCard = ({title, popularity, poster}) => {
  const posterUrl = `http://image.tmdb.org/t/p/w185//${poster}`
  return (
    <article>
      <h2>{title}</h2>
      <img src={posterUrl} alt={title + ' poster'} />
      <p>{popularity}</p>
    </article>
  )
}

export default MovieCard;