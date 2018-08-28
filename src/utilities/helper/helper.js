const cleanData = (data) => {
  const shortenedResults = data.results.filter( movie => movie.poster_path).slice(0, 11);
  return shortenedResults.map((movie, index) => {
    return {
      title: movie.title,
      popularity: movie.popularity,
      poster: movie.poster_path,
    }
  })
}

export default cleanData;