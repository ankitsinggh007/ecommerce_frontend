import { Flex } from "@chakra-ui/react";

 export const RatingDisplay = ({ rating }) => {
    const maxRating = 5;
    const fullStar = '★';
    const emptyStar = '☆';
    const fullStars = fullStar.repeat(rating);
    const emptyStars = emptyStar.repeat(maxRating - rating);
    return (
      <Flex fontSize={['1rem', '2rem', '2rem']}
      
      style={{alignSelf:'flex-start'}}>
        <Flex color='#FF9F00'>{fullStars}</Flex>
        {emptyStars}
      </Flex>
    );
  };



