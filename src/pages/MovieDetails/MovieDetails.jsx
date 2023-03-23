import { Suspense } from 'react';
import MovieItem from 'components/MovieItem/MovieItem';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { getMovieDeteilFetch } from '../../services/MoviesFetch';
// Стили
import { Conteiner, Link, List, Div } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  // добавить проверку возврата на '/' т.к при перезагрузке location.state  будет null
  const backLocationLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function getMoveInfo() {
      try {
        const movieDeteil = await getMovieDeteilFetch(movieId);
        setMovieInfo(movieDeteil);
      } catch (error) {
        console.log(error);
      }
    }
    getMoveInfo();
  }, [movieId]);

  // первый рендер если false то return
  if (!movieInfo) {
    return;
  }
  return (

    <Conteiner>
      <Link to={backLocationLink.current}>Go back</Link>
 
      <Div>
                   <MovieItem movieInfo={movieInfo} />    
      </Div>
   
      <h1>Additional information </h1>
      <List>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </List>
      <Suspense fallback={<div>Loding...</div>}>
          <Outlet />
      </Suspense>
    </Conteiner>
   
  );
};
<div></div>;
export default MovieDetails;
