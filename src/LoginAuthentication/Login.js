import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event =>{
        event.preventDefault();
    }


    return (
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered w-72"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link
                      to="/signup"
                      className="label-text-alt link link-hover"
                    >
                      Don't have an account?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    onSubmit={handleLogin}
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;