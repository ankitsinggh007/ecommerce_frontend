import React ,{useEffect, useState}from 'react'
import {AiTwotoneStar} from "react-icons/ai"
function AddReview({Rating,setRating,ShowReview,setShowReview}) {
    const [hoverRating, setHoverRating] = useState(0);
    const [countCharacter,setcountCharacter]=useState(150);
    useEffect(()=>{
        
        setcountCharacter(150-Rating.review.length);

    },[Rating.review]);

  const handleMouseEnter = (star) => {
    setHoverRating(star);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (star) => {
    setRating({...Rating,rating:star});
  };
  return (
    

<div className="flex w-80 items-center absolute left-40 border border-black rounded-md h-fit flex-col p-2 bg-yellow-100">

<span onClick={()=>setShowReview(false)} className='cursor-pointer absolute top-0 text-gray-500 text-2xl right-2'>x</span>
<span className="flex items-center mb-4 space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`cursor-pointer text-xl transition-colors duration-300 ${
            star <= (hoverRating || Rating.rating)
              ? 'text-yellow-500 hover:text-yellow-500'
              : 'text-gray-300 hover:text-yellow-500'
          }`}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(star)}
        >
          <AiTwotoneStar className="text-2xl"/>
        </span>
      ))}
              </span>
              <span className='text-red-500 text-sm  '>only {countCharacter} character are allowed</span>

<textarea    maxLength="150" onChange={(e)=>setRating({...Rating,review:e.target.value})} type="text"placeholder="write something about product" className="p-1 border w-[94%] border-gray-400 rounded-md"></textarea>
<button type="submit"  className="bg-[#FF9F00] w-fit self-end px-2 py-1 text-white mt-1 rounded-full">Post</button>
</div>
  )
}

export default AddReview