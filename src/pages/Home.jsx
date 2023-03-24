import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {getTrendFetch} from '../services/MoviesFetch';
import MoviesTrendList from '../components/MoviesList/MoviesTrendList';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    async function getTrendMovies() {
      try {
        const trendMov = await getTrendFetch();
     
        setTrendMovies(trendMov.results);
      } catch (error) {
        console.log(error);
      }
         } getTrendMovies();
  }, []);

  return <MoviesTrendList trendMovies={trendMovies} />;
};

MoviesTrendList.propTypes={
  trendMovies:PropTypes.array
}



export default Home;
