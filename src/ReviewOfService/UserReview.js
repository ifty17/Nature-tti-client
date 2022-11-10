import React, { useEffect, useState } from 'react';
import Revs from './Revs';

const UserReview = () => {
    const [userReviews, setUserReviews] = useState([]);
    console.log(userReviews);
    useEffect(() => {
        fetch("http://localhost:5000/storeReview")
        .then(res => res.json())
        .then(data => setUserReviews(data));
    },[])

    return (
        <div>
            {
                userReviews.map(review => <Revs
                key={review._id}
                review={review}
                ></Revs>)
            }
        </div>
    );
};

export default UserReview;