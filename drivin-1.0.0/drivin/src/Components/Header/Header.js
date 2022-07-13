import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <div>
        {/* Spinner Start */}
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-grow text-primary" role="status" />
  </div> */}
        {/* Spinner End */}
        {/* Topbar Start */}
        <div className="container-fluid bg-dark text-light p-0">
          <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center me-4">
                <small className="fa fa-map-marker-alt text-primary me-2" />
                <small>123 Street, New York, USA</small>
              </div>
              <div className="h-100 d-inline-flex align-items-center">
                <small className="far fa-clock text-primary me-2" />
                <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
              </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
              <div className="h-100 d-inline-flex align-items-center me-4">
                <small className="fa fa-phone-alt text-primary me-2" />
                <small>+012 345 6789</small>
              </div>
              <div className="h-100 d-inline-flex align-items-center mx-n2">
                <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href><i className="fab fa-linkedin-in" /></a>
                <a className="btn btn-square btn-link rounded-0" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar End */}
        {/* Navbar Start */}
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
          <a href="index.html" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
            <h2 className="m-0"><i className="fa fa-car text-primary me-2" />Drivin</h2>
          </a>
          <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              {/* <a href="index.html" className="nav-item nav-link">Home</a> */}
              <li>
                <NavLink className="nav-item nav-link" to={"/"}>Home</NavLink>
                </li>
              {/* <a href="about.html" className="nav-item nav-link">About</a> */}
              <li>
                <NavLink className="nav-item nav-link" to={"/About"}>About</NavLink>
              </li>
              {/* <a href="courses.html" className="nav-item nav-link">Courses</a> */}
              <li>
              <NavLink className="nav-item nav-link" to={"/Courses"}>Courses</NavLink>
              </li>
              <div className="nav-item dropdown">
                {/* <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a> */}
                <NavLink className="nav-link dropdown-toggle active" data-bs-toggle="dropdown" to={"/Pages"}>Pages</NavLink>
                <div className="dropdown-menu bg-light m-0">
                <NavLink className="dropdown-item active" to={"/Features"}>Features</NavLink>
                  {/* <a href="feature.html" className="dropdown-item active">Features</a> */}
                  <NavLink className="dropdown-item" to={"/Appointment"}>Appointment</NavLink>
                  <NavLink className="dropdown-item" to={"/Our_Team"}>Our_Team</NavLink>
                  {/* <a href="team.html" className="dropdown-item">Our_Team</a> */}
                  <NavLink className="dropdown-item" to={"/Testimonial"}>Testimonial</NavLink>
                  {/* <a href="404.html" className="dropdown-item">404 Page</a> */}
                </div>
              </div>
              <NavLink className="nav-item nav-link" to={"/Contact"}>Contact</NavLink>
              
              <NavLink className="nav-item nav-link" to={"/Login"}>Login</NavLink>
              
            </div>
            < NavLink  className="btn btn-primary py-4 px-lg-5 d-none d-lg-block" to={"/Get_Started"}>Get_Started<i className="fa fa-arrow-right ms-3"/></NavLink>
          </div>
        </nav>
        {/* Navbar End */}

      </div>



    </div>
  );
}

export default Header;