import React from 'react';

const Review = ({rev}) => {
    const {image, userName, review} = rev;
    return (
      <div className="card bg-base-100 shadow-xl my-5">
        <div className="card-body">
          <div className="flex gap-3 items-center">
            <img className="rounded-full w-12" src={image} alt="" />
            <p>{userName}</p>
          </div>
          <p>{review}</p>
          <hr />
        </div>
      </div>
    );
};

export default Review;