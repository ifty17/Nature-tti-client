import React from "react";
import photographer from "../../assets/photographer.png";

const PhotoGrapher = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="md:w-1/2 relative">
          <h2 className="text-2xl">
            Taking an image, freezing a moment, reveals how rich reality truly
            is.
          </h2>
          <div className="mt-7">
            <div>
              <p>After Event Videography: 40%</p>
              <progress
                className="progress progress-warning w-full"
                value="40"
                max="100"
                ></progress>
            </div>
            <br />
            <div>
            <p>Animal Photography: 80%</p>
              <progress
                className="progress progress-info w-full"
                value="70"
                max="100"
              ></progress>
            </div>
            <br />
            <div>
              <p>Aesthetic Editing: 99.99%</p>
              <progress
                className="progress progress-warning w-full"
                value="100"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 ">
          <img src={photographer} alt="photographer" />
        </div>
      </div>
    </div>
  );
};

export default PhotoGrapher;
