import React from 'react';

const RevOfUser = ({reviews}) => {
    const { review, image, userName } = reviews;
    return (
      <div className="card bg-base-100 shadow-xl my-5">
        <div className="card-body">
          <div className="flex gap-3 items-center">
            <img className="rounded-full w-12" src={image} alt="" />
            <p>{userName}</p>
            
          </div>
          <p>Opinion: {review}</p>
          <hr />
        </div>
      </div>
    );
};

export default RevOfUser;