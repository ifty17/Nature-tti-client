import React from 'react';
import leopard from '../../assets/leopard.jpg'
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    return (
        <div
          className="hero min-h-screen rounded-3xl my-5 "
          style={{ backgroundImage: `url(${leopard})` }}
        >
          <div className="bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
    );
};

export default Home;