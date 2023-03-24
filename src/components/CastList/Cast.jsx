
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CastList from './CastLIst';
import { getMovieCast } from '../../services/MoviesFetch';

const Cast = () => {
  const [castInfo, setCastInfo] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    async function getCastInfo() {
      try {
        const castData = await getMovieCast(movieId);
        setCastInfo(castData.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getCastInfo();
  }, [movieId]);

  if (!castInfo) {
    return;
  }
  return <CastList castInfo={castInfo} />;
};





export default Cast;
