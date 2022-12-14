import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../Hooks/UseTitle";
import UserReview from "./UserReview";

const MyReviews = () => {
    useTitle("My Reviews - Nature tti")
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data)
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm(
      "Are you sure you want to delete this review?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = reviews.filter((rev) => rev._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      {reviews.map((rev) => (
        <UserReview key={rev._id} rev={rev} handleDelete={handleDelete}></UserReview>
      ))}
    </div>
  );
};

export default MyReviews;
