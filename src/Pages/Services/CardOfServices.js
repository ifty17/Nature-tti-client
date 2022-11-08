import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const CardOfServices = ({service}) => {
    const {name, img, details, price, _id} = service;
    return (
      <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl h-full">
          <figure>
            <PhotoProvider>
              <PhotoView src={img}>
                <img src={img} alt="" />
              </PhotoView>
            </PhotoProvider>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>
              {details.slice(0, 100) + "....."}
              <Link to={`/services/${_id}`}>read more</Link>
            </p>
            <p className="text-xl">Price: ${price} only</p>
            <div className="card-actions justify-end">
              <Link to={`/services/${_id}`}>
                <button className="btn btn-primary ">View details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CardOfServices;