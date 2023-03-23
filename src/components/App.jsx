import { lazy } from "react"
import { Route, Routes } from 'react-router-dom';
const Home = lazy(()=> import('../pages/Home'));
const MovieDetails = lazy(()=> import('../pages/MovieDetails/MovieDetails'));
const Movies = lazy(()=> import('../pages/Movies'));
const Layout = lazy(()=> import('../components/Layout/Layout'));
const Cast = lazy(()=> import('../components/CastList/Cast'));
const Reviews = lazy(()=> import('../components/ReviewsList/Reviews'));



export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

<div>DivMovieDetails</div>;



