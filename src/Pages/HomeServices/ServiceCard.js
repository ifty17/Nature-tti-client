import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {name, price, img, details, rating} = service;
  return (
   
      <div className="card card-compact w-96 bg-base-100 shadow-xl h-full ">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{details.slice(0, 100) + '.....'}<Link>read more</Link></p>
          <div className="card-actions justify-end items-center">
            <p className='text-xl'>Price: ${price} only</p>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    
  );
};

export default ServiceCard;