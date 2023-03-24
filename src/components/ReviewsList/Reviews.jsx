
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from '../../services/MoviesFetch';
import ReviewsList from './ReviewsList';

const Reviews = () => {
  const [reviewsInfo, setReviewsInfo] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviewsInfo() {
      try {
        const reviewsData = await getMoviesReviews(movieId);

        setReviewsInfo(reviewsData.results);
      } catch (error) {
        console.log(error);
      }
    }
    getReviewsInfo();
  }, [movieId]);

  if (!reviewsInfo) {
    return;
  }
  return <ReviewsList reviewsInfo={reviewsInfo} />;
};


export default Reviews;
