import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../context/AuthProvider';

const Nav = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut().then().catch(err => console.error(err))
  }

  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      {
        user?.email ?
        <>
        <li className="font-semibold">
        <Link to="/myservices">Add services</Link>
      </li>
      <li className="font-semibold">
        <Link to="/myreviews">My reviews</Link>
      </li>
        </>
        :
        <>
        </>
      }
      <li className="font-semibold">
        <Link to="/services">Services</Link>
      </li>
      <li className="font-semibold">
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );

    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl w-[80%] md:w-[50%] "
          >
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <button onClick={handleLogOut} className="btn btn-primary">
              Log out
            </button>
          ) : (
            <Link  to="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    );
};

export default Nav;