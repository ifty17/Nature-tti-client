import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AuthContext } from "../../context/AuthProvider";
const DetailService = () => {
  const { name, details, img, price, _id } = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);

 

  const handleReviews = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.message.value;
    const image = user?.photoURL;
    const userName = user?.displayName;
    const email = user.email;
    
    console.log(review, image, userName, email);

    const data = {
      review, image, userName, email, serviceId: _id, price
    }

    // fetch("http://localhost:5000/storeReview")
    // .then(res => res.json())
    // .then(data => console.log(data))
    

    fetch("http://localhost:5000/storeReview", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            form.reset();
          })
          .catch((error) => console.error(error));
  }
  return (
    <div>
      <h1 className="text-3xl font-bold py-5">{name}</h1>
      <div className="w-[74%] ">
        <div>
          <PhotoProvider>
            <PhotoView src={img}>
              <img className=" rounded-lg shadow-2xl" src={img} alt="" />
            </PhotoView>
          </PhotoProvider>
          <p className="my-5">{details}</p>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <form onSubmit={handleReviews}  className="card-body">
            <h2 className="card-title">write your review</h2>
            <div className="flex justify-center items-center gap-3">
              {user?.photoURL ? (
                <img
                  className="rounded-full w-16"
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                <></>
              )}
              {user?.displayName ? <p>{user?.displayName}</p> : <></>}
            </div>
            <textarea
              className="textarea textarea-primary"
              placeholder="write here"
              name="message"
            ></textarea>
            <div className="card-actions justify-end">
              <input type='submit' className="btn btn-primary" value='Post' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailService ;
