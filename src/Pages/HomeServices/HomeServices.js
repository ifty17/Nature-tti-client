import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const HomeServices = () => {
    const [services, setServices] = useState([]);
console.log(services);
    useEffect(() =>{
        fetch("http://localhost:5000/homeServices")
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    return (
      <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 my-10 ">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/services">
            <button className="btn btn-primary my-10">See all services</button>
          </Link>
        </div>
      </div>
    );
};

export default HomeServices;