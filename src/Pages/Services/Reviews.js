import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Review from './Review';

const Reviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    console.log(reviews);


    return (
      <div>
        {
            reviews.map(rev => <Review
            key={rev._id}
            rev={rev}
            ></Review>)
        }
      </div>
    );
};

export default Reviews;