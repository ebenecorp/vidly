import React from 'react';
import { Link, NavLink } from 'react-router-dom'


const NavBar = ({ user }) => {
    return (
      // <nav classNameName="collapse navbar-collapse" id="navbarNavAltMarkup">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Vidly
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/movies">
                Movies <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers">
                Customers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/rentals">
                Rentals
              </NavLink>
            </li>
            {!user && 
            <React.Fragment><li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
            </React.Fragment>
            }
            {user && 
            <React.Fragment>
              <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                {user.name}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout">
                Logout
              </NavLink>
            </li>
            </React.Fragment>
            }
          </ul
          >
        </div>
      </nav>
      /* <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink classNameName="navbar-brand" to="/">
            {" "}
            Vidly{" "}
          </NavLink>
          <NavLink classNameName="navbar-brand" to="/movies">
            {" "}
            Movies{" "}
          </NavLink>
          <NavLink classNameName="navbar-brand" to="/customers">
            {" "}
            Customers{" "}
          </NavLink>
          <NavLink classNameName="navbar-brand" to="/rentals">
            {" "}
            Rentals{" "}
          </NavLink>
        </nav>
        //{" "}
      </nav> */
    );
}
 
export default NavBar;