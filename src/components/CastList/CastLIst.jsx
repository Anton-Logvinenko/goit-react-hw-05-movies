import posterPlug from '../../utility/posterPlug.png';

const CastList = ({ castInfo }) => {
   return castInfo.length === 0 ? (
    <h2>No cast Information</h2>
  ) : (
    <ul>
      {castInfo.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <img
            src={
              !profile_path
                ? posterPlug
                : `https://image.tmdb.org/t/p/w500/${profile_path}`
            }
            alt={name}
            width="70"
          />
          <p>Name: {name}</p>
          <p>Character: {!character ? '"no information"' : character}</p>
        </li>
      ))}
    </ul>
  );
};

export default CastList;
