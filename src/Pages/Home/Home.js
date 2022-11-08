import React from 'react';
import leopard from '../../assets/leopard.jpg'
import HomeServices from '../HomeServices/HomeServices';
import PhotoGrapher from '../PhotoGrapher/PhotoGrapher';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
      <div>
        <div
          className="hero md:min-h-screen md:rounded-3xl my-5 opacity-80"
          style={{ backgroundImage: `url(${leopard})` }}
        >
          <div className=""></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-3xl md:text-5xl font-bold text-white">
                Find the best Photographer!
              </h1>
              <p className="mb-5 ">
                I will help you to grow your business!
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <div>
          <PhotoGrapher></PhotoGrapher>
          <HomeServices></HomeServices>
          <Skills></Skills>
        </div>
      </div>
    );
};

export default Home;