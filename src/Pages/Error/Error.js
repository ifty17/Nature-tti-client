import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">404 Error :(</h1>

              <Link to='/'>
                <button className="btn btn-primary my-5">Go back to home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Error;