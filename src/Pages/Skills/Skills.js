import React from 'react';
import img from '../../assets/lion.jpg'

const Skills = () => {
    return (
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="md:w-[33%] relative text-center ">
            <h1 className="text-4xl font-bold">Apps I use for Editing!</h1>
            <div className="my-5 bg-slate-50 p-4 shadow-xl p-5">
              <h1 className="text-3xl mb-3">Adove Photoshop</h1>
              <hr />
            </div>
            <div className="my-5 bg-slate-50 p-4 shadow-xl">
              <h1 className="text-3xl mb-3">Adove Lightroom</h1>
              <hr />
            </div>
            <div className="my-5 bg-slate-50 p-4 shadow-xl">
              <h1 className="text-3xl mb-3">Adove Premierpro</h1>
              <hr />
            </div>
          </div>
          <div className="md:w-[33%] border">
            <img src={img} alt="" />
          </div>
          <di className="md:w-[33%] relative text-center bg-slate-100 p-5">
            <h1 className="text-4xl font-bold">Gears I use for Photo Shoot!</h1>
            <div className="my-5  p-4 ">
              <h1 className="text-3xl mb-3">Sony Alpha 7S</h1>
              <hr />
            </div>
            <div className="my-5 p-4">
              <h1 className="text-3xl mb-3">
                Sony FE 24-70mm 
              </h1>
              <hr />
            </div>
            <div className="my-5 p-4">
              <h1 className="text-3xl mb-3">Lowepro Fastpack </h1>
              <hr />
            </div>
          </di>
        </div>
      </div>
    );
};

export default Skills;