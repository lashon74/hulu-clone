const { REACT_APP_MY_API } = process.env;

export default {
  fetchTreanding: `/trending/all/week?api_key=${REACT_APP_MY_API}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${REACT_APP_MY_API}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${REACT_APP_MY_API}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${REACT_APP_MY_API}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${REACT_APP_MY_API}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${REACT_APP_MY_API}&with_genres=10749`,
  fetchMystery: `/discover/movie?api_key=${REACT_APP_MY_API}&with_genres=9648`,
  fetchSciFi: `/discover/movie?api_key=${REACT_APP_MY_API}&with_genres=878`,
  fetchWestern: `/discover/movie?api_key=${REACT_APP_MY_API}&with_genres=37`,
  fetchAnimation: `/discover/movie?api_key=${REACT_APP_MY_API}&with_genres=16`,
  fetchTv: `/discover/movie?api_key=${REACT_APP_MY_API}&with_genres=10770`,
};
