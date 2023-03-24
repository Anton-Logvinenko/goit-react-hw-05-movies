import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import posterPlug from '../../utility/posterPlug.png';
// Стили
import { Conteiner, List, Li, ImgBox } from './MoviesSearchList.styled';

const MoviesSearchList = ({ moviesData }) => {
  const imgPoster = `https://image.tmdb.org/t/p/w500/`;
  const location = useLocation();
  if (!moviesData) {
    return;
  }
  return (
    <Conteiner>
      <List>
        {moviesData.map(({ title, id, poster_path, release_date }) => (
          <Li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <ImgBox>
                <img
                  src={!poster_path ? posterPlug : `${imgPoster}${poster_path}`}
                  alt={title}
                  width="70"
                />
                <p>{`${title} (${release_date.slice(0, 4)})`}</p>
              </ImgBox>
            </Link>
          </Li>
        ))}
      </List>
    </Conteiner>
  );
};

MoviesSearchList.propTypes = {
  moviesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
    })
  ),
};

export default MoviesSearchList;
