const cleanData = (data) => {
  console.log(data)
  const shortenedResults = data.results.slice(0, 11)
  return shortenedResults.map((movie, index) => {
    return {
      title: movie.title,
      popularity: movie.popularity,
      poster: movie.poster_path,
    }
  })
}

export default cleanData