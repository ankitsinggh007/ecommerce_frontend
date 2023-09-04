import { Flex } from "@chakra-ui/react";

 export const RatingDisplay = ({ rating }) => {
    const maxRating = 5;
    const fullStar = '★';
    const emptyStar = '☆';
    const fullStars = fullStar.repeat(rating);
    const emptyStars = emptyStar.repeat(maxRating - rating);
    return (
      <div className=" w-full text-4xl flex justify-center md:justify-start   ">
        <Flex color='#FF9F00'>{fullStars}</Flex>
        {emptyStars}
      </div>
    );
  };



