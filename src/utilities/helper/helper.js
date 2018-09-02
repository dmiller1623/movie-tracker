const cleanData = (data) => {
  const shortenedResults = data.results.filter( movie => {
    return movie.poster_path;
  }).slice(0, 11);
  
  return shortenedResults.map( (movie, index) => {
    return {
      movie_id: index,
      title: movie.title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      overview: movie.overview
    };
  });
};

export default cleanData;
