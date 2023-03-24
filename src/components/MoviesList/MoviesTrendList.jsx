import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import posterPlug from '../../utility/posterPlug.png';
import { Conteiner, List, Li, ImgBox } from './MoviesTrendList.Styled';

const MoviesTrendList = ({ trendMovies }) => {
  const imgPoster = `https://image.tmdb.org/t/p/w500/`;

  const location = useLocation();
  return (
    <Conteiner>
      <h1>Trending today</h1>
      <List>
        {trendMovies.map(({ id, title, release_date, poster_path }) => (
          <Li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <ImgBox>
                {' '}
                <img
                  src={!poster_path ? posterPlug : `${imgPoster}${poster_path}`}
                  alt={title}
                  width="70"
                />
                <p>{`${title} (${release_date.slice(0, 4)}) `}</p>
              </ImgBox>
            </Link>
          </Li>
        ))}
      </List>
    </Conteiner>
  );
};

MoviesTrendList.propTypes = {
  trendMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
    })
  ),
};
export default MoviesTrendList;
