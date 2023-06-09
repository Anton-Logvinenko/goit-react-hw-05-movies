import PropTypes from 'prop-types';
import SearchMovies from '../components/SearchMovies/SearchMovies';
import { getSearchFetch } from '../services/MoviesFetch';
import MoviesSearchList from '../components/MoviesList/MoviesSearchList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [moviesData, setMoviesData] = useState(null);
  const [error, setError] = useState(false);
  

  const [searchParams, setSearchParams] = useSearchParams();
  const moviesName = searchParams.get('query') ?? '';

  const getMoviesName = searchMovies => {
    setSearchParams({ query: searchMovies });
       
  };

  useEffect(() => {
    if (moviesName === '') {
      return;
    }
   
    setError(false);

    async function getSearchData() {
      const searchData = await getSearchFetch(moviesName);
       // если запрос пустой вывести сообщение об ошибке
      if (searchData.results.length === 0) {
         setError(true);
      }
      setMoviesData(searchData.results);
    }
    getSearchData();
  }, [moviesName]);


  return (
    <div>
      <SearchMovies getMoviesName={getMoviesName} />
      {error && <h2>Moveis not found, please enter correct request</h2>}
      <MoviesSearchList moviesData={moviesData} />
         </div>
  );
};

SearchMovies.prototype = {
  getMoviesName: PropTypes.func,
};
MoviesSearchList.prototype = {
  moviesData: PropTypes.objectOf(Object),
};

export default Movies;
