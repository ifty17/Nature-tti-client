import React from 'react';
import { Link } from 'react-router-dom';
import leopard from '../../assets/leopard.jpg'
import useTitle from '../../Hooks/UseTitle';
import HomeServices from '../HomeServices/HomeServices';
import PhotoGrapher from '../PhotoGrapher/PhotoGrapher';
import Skills from '../Skills/Skills';

const Home = () => {
  useTitle("Home - Nature tti")
    return (
      <div>
        <div
          className="hero md:min-h-screen md:rounded-3xl my-5 "
          style={{ backgroundImage: `url(${leopard})` }}
        >
          <div className=""></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-3xl md:text-5xl font-bold  opacity-100">
                Find the best Photographer!
              </h1>
              <p className="mb-5 text-xl ">
                I will help you to grow your business!
              </p>
              <Link to="/services">
                <button className="btn btn-primary">View services!</button>
              </Link>
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