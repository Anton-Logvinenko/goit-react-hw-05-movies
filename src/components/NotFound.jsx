import error404 from '../utility/error404.jpg';

const NotFound = () => {
  return <img src={error404} alt="error404" width="700" style={{ margin: 250,}} />;
};

export default NotFound;
