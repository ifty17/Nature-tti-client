import React, { useEffect, useState } from 'react';

const Revs = ({review}) => {
    const [serviceReview, setServiceReview] = useState([])
    const { _id, image, name, serviceId } = review;
    console.log(review);
    useEffect(() =>{
        fetch(`http://localhost:5000/storeReview?serviceId${serviceId}`)
        .then(res => res.json())
        .then(data => setServiceReview(data));
    }, [])
    return (
      <div className="card bg-base-100 shadow-xl my-5">
        <div className="card-body">
          <div className="flex gap-3 items-center">
            <img className="rounded-full w-12" src={image} alt="" />
            {/* <p>{userName}</p> */}
            
          </div>
          <p>Opinion: {review}</p>
          <hr />
        </div>
      </div>
    );
};

export default Revs;