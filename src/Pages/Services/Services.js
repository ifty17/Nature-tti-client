import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardOfServices from './CardOfServices';

const Services = () => {
    const services = useLoaderData();
    
    return (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-10">
        {services.map((service) => (
          <CardOfServices key={service._id} service={service}></CardOfServices>
        ))}
      </div>
    );
};

export default Services;