import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const UserReview = ({ rev, handleDelete }) => {
  const { review, image, userName, email, serviceId, _id } = rev;
  console.log(_id);

  return (
    <div className="card bg-base-100 shadow-xl my-5">
      <div className="card-body">
        <div className="flex gap-3 items-center">
          <img className="rounded-full w-12" src={image} alt="" />
          <p>{userName}</p>
          <div className="card-actions justify-end">
            <button type="submit" className="btn btn-primary">
              <FaEdit />
            </button>
            <button
              onClick={() => handleDelete(_id)}
              type="submit"
              className="btn btn-primary"
            >
              <MdDeleteForever />
            </button>
          </div>
        </div>
        <p>Opinion: {review}</p>
        <hr />
      </div>
    </div>
  );
};

export default UserReview;