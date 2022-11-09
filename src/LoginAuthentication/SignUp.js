import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photo.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            handleUpdateUserProfile(name, photoURL);
            form.reset();
            navigate(from, { replace: true });
        })
        .catch(err =>{
            console.error(err);
        })

    }

    const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
        displayName: name,
        photoURL: photoURL,
      };
      updateUserProfile(profile)
        .then(() => {})
        .catch((error) => console.error(error));
    };

    return (
      <div>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSignUp} className="card-body">
                <h1 className="text-5xl font-bold mr-28">Sign Up!</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="your photo URL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
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
                      to="/login"
                      href="#"
                      className="label-text-alt link link-hover"
                    >
                      Already have an account?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;