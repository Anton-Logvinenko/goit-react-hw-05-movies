import { useState } from 'react';
import css from './SearchMovies.module.css';

const SearchMovies = ({ getMoviesName }) => {
  const [searchMovies, setSearchMovies] = useState('');

  const handelSubmit = e => {
    e.preventDefault();
    getMoviesName(searchMovies);
    setSearchMovies('');
  };
  return (

      <form className={css.form} onSubmit={handelSubmit}>
        <input
        className={css.input}
          type="text"
          value={searchMovies}
          onChange={e => {
            setSearchMovies(e.target.value);
          }}
          placeholder="Search movies"
        />
        <button  className={css.btnForm} type="submit">Search</button>
      </form>

  );
};

export default SearchMovies;
