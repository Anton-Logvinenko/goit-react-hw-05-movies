import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '992e567e43c913ea6cedbae9c8870c1e';
const TREND_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const MOVIE_DETAILS_URL = `${BASE_URL}/movie/`;

async function getTrendFetch() {
  const params = {
    api_key: API_KEY,
  };
  const response = await axios.get(`${TREND_URL}`, { params });
  console.log('111111', response);
  return response.data;
}

async function getMovieDeteilFetch(movieId) {
  const params = {
    api_key: API_KEY,
  };
  const response = await axios.get(`${MOVIE_DETAILS_URL}${movieId}`, {
    params});

  return response.data;
}



async function getMovieCast(movieId){
  const params = {
    api_key: API_KEY,
  };
 const response= await axios.get(`${MOVIE_DETAILS_URL}${movieId}/credits`, {
  params});

return response.data
}


async function getMoviesReviews (movieId){
  const params = {
    api_key: API_KEY,
  };
const response= await axios.get(`${MOVIE_DETAILS_URL}${movieId}/reviews`, {params})
return response.data

}

async function  getSearchFetch (moviesName){
  const params = {
    api_key: API_KEY,
    query: moviesName,
    page:1,
  };

const response = await axios.get(`${SEARCH_URL}`,{params})
return response.data

}






export { getTrendFetch, getMovieDeteilFetch, getMovieCast, getMoviesReviews, getSearchFetch};
