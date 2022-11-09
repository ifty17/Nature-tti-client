import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Review from './Review';

const Reviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    console.log(reviews);

    
    
    useEffect(() =>{
        fetch("http://localhost:5000/storeReview")
        .then(res => res.json())
        .then(data =>{
            setReviews(data)
        })
    }, [user?.email])

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