import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailService = () => {
    const {name, details, img, price} = useLoaderData();

    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={img}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="py-6">
               {details}
              </p>
              <p className="py-6">
               Price: ${price} only
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DetailService;