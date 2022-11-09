import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AuthContext } from '../../context/AuthProvider';

const DetailService = () => {
    const {name, details, img, price} = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(user);

    const handleReviews = event =>{
      event.preventDefault();
      const form = event.target;
      const review = form.message.value;
      const image = user?.photoURL;
      const userName = user?.displayName;
      console.log(review, image, userName);



      fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify()
      })
    }



    return (
      <div>
        <h1 className="text-3xl">{name}</h1>
        <div className="mx-auto">
          <PhotoProvider>
            <PhotoView src={img}>
              <img className=" rounded-lg shadow-2xl" src={img} alt="" />
            </PhotoView>
          </PhotoProvider>
          <div className="w-[74%] my-5">
            <p>{details}</p>
            <div className="card  bg-base-100 shadow-xl">
              <form onSubmit={handleReviews} className="card-body">
                <h2 className="card-title">write your review</h2>
                <div className='flex justify-center items-center gap-3'>
                  {
                    user?.photoURL ?
                    <img className='rounded-full w-16' src={user?.photoURL} alt="" />
                    :
                    <></>
                  }
                  {
                    user?.displayName ?
                    <p>{user?.displayName}</p>
                    :
                    <></>
                  }
                </div>
                <textarea
                  className="textarea textarea-primary"
                  placeholder="write here" 
                  name="message"
                ></textarea>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Post</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DetailService;