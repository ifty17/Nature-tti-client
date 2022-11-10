import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
    const { loginUser, loginWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, { replace: true });
            
        })
        .catch(err =>{
            console.error(err);
            setError(err.message)
        })

    }
        const provider = new GoogleAuthProvider();

        const handleGoogle = () => {
          loginWithGoogle(provider)
          .then(result => {
            const user = result.user;
            setError('')
            console.log(user);
          })
          .catch(err =>{
            console.error(err);
            setError(err.message);
          })
        };





    return (
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
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
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                  <button
                    onClick={handleGoogle}
                    className="btn btn-primary mt-4"
                    type="submit"
                  > Login with Google</button>
                </div>
                {error}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;