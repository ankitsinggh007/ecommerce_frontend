 export const RatingDisplay = ({ rating }) => {
    const maxRating = 5;
    const fullStar = '★';
    const emptyStar = '☆';
    const fullStars = fullStar.repeat(rating);
    const emptyStars = emptyStar.repeat(maxRating - rating);
    return (
      <div style={{alignSelf:'flex-start'}}>
        {fullStars}
        {emptyStars}
      </div>
    );
  };



