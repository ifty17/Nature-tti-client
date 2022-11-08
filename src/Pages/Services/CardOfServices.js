import React from 'react';
import { Link } from 'react-router-dom';

const CardOfServices = ({service}) => {
    const {name, img, details, price} = service;
    return (
      <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl h-full">
          <figure>
            <img src={img} alt="services" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>
              {details.slice(0, 100) + "....."}
              <Link>read more</Link>
            </p>
            <p className="text-xl">Price: ${price} only</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary ">View details</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CardOfServices;