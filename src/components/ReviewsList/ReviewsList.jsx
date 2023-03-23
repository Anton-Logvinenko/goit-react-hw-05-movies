const ReviewsList = ({ reviewsInfo }) => {
  console.log('ReviewsList',reviewsInfo)


  return reviewsInfo.length ===0 ? (
    <h2>We don,t have any reviews for this movie</h2>
  ) : (
    <ul>
      {reviewsInfo.map(({ author, content, id }) => (
        <li key={id}>
          <p> Author: {author}</p>
          <p> {content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsList;
