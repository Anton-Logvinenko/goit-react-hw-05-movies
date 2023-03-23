
import posterPlug from '../../utility/posterPlug.png';
import {Conteiner, SubTitle,BoxInfo} from './MovieItem.styled'

const MovieItem = ({ movieInfo }) => {

   const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieInfo;
  // ссылка на imgPoster
  const imgPoster = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  //  Преобразование рейтинга в %
  const vote =Math.round(vote_average * 10);

  // извлечение года выпуска фильма
  const releaseYear = release_date.slice(0, 4);

  // запись массива жанров в переменную, жанры разделить пробелом
  let genresArr = [];
  genres.map(genre => genresArr.push(genre.name)).join(' ');

  return (
    <Conteiner>

    <img
        src={!poster_path ?posterPlug:imgPoster}
        alt={original_title}
        width="250"
      />
   <BoxInfo>
      <h2>
        {original_title} ({releaseYear})
      </h2>
      <p>Use Score {vote}%</p>
      <SubTitle>Overview</SubTitle>
      <p>{overview}</p>
      <SubTitle>Genres</SubTitle>
      <p>{genresArr.join(' ')}</p>
      </BoxInfo>
    </Conteiner>
  );
};

export default MovieItem;
