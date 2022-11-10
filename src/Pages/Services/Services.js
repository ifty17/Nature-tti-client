import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import CardOfServices from './CardOfServices';
import { ColorRing } from "react-loader-spinner";
import useTitle from '../../Hooks/UseTitle';

const Services = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([])
  useTitle('Services - Nature tti')
    useEffect(() =>{
      fetch("http://localhost:5000/services")
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      });
    },[])
    // const services = useLoaderData();
    // const { loading } = useContext(AuthContext);
    
    return (
      <div>
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <ColorRing
              visible={true}
              height="100"
              width="100"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-10">
            {services.map((service) => (
              <CardOfServices
                key={service._id}
                service={service}
              ></CardOfServices>
            ))}
          </div>
        )}
      </div>
    );
};

export default Services;