import React from 'react';

function Home(props) {
    return (
      <div>
  
  {/* Facts Start */}
  <div className="container-fluid facts py-5 pt-lg-0">
    <div className="container py-5 pt-lg-0">
      <div className="row gx-0">
        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
          <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{minHeight: 150}}>
            <div className="d-flex">
              <div className="flex-shrink-0 btn-lg-square bg-primary">
                <i className="fa fa-car text-white" />
              </div>
              <div className="ps-4">
                <h5>Easy Driving Learn </h5>
                <span>Clita erat ipsum lorem sit sed stet duo justo erat amet</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
          <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{minHeight: 150}}>
            <div className="d-flex">
              <div className="flex-shrink-0 btn-lg-square bg-primary">
                <i className="fa fa-users text-white" />
              </div>
              <div className="ps-4">
                <h5>National Instructor</h5>
                <span>Clita erat ipsum lorem sit sed stet duo justo erat amet</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
          <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{minHeight: 150}}>
            <div className="d-flex">
              <div className="flex-shrink-0 btn-lg-square bg-primary">
                <i className="fa fa-file-alt text-white" />
              </div>
              <div className="ps-4">
                <h5>Get licence</h5>
                <span>Clita erat ipsum lorem sit sed stet duo justo erat amet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Facts End */}
  {/* About Start */}
  <div className="container-xxl py-6">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{minHeight: 400}}>
            <img className="position-absolute w-100 h-100" src="img/about-1.jpg" alt style={{objectFit: 'cover'}} />
            <img className="position-absolute top-0 start-0 bg-white pe-3 pb-3" src="img/about-2.jpg" alt style={{width: 200, height: 200}} />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="h-100">
            <h6 className="text-primary text-uppercase mb-2">About Us</h6>
            <h1 className="display-6 mb-4">We Help Students To Pass Test &amp; Get A License On The First Try</h1>
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <div className="row g-2 mb-4 pb-2">
              <div className="col-sm-6">
                <i className="fa fa-check text-primary me-2" />Fully Licensed
              </div>
              <div className="col-sm-6">
                <i className="fa fa-check text-primary me-2" />Online Tracking
              </div>
              <div className="col-sm-6">
                <i className="fa fa-check text-primary me-2" />Afordable Fee 
              </div>
              <div className="col-sm-6">
                <i className="fa fa-check text-primary me-2" />Best Trainers
              </div>
            </div>
            <div className="row g-4">
              <div className="col-sm-6">
                <a className="btn btn-primary py-3 px-5" href>Read More</a>
              </div>
              <div className="col-sm-6">
                <a className="d-inline-flex align-items-center btn btn-outline-primary border-2 p-2" href="tel:+0123456789">
                  <span className="flex-shrink-0 btn-square bg-primary">
                    <i className="fa fa-phone-alt text-white" />
                  </span>
                  <span className="px-3">+012 345 6789</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Courses Start */}
  <div className="container-xxl courses my-6 py-6 pb-0">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 500}}>
        <h6 className="text-primary text-uppercase mb-2">Tranding Courses</h6>
        <h1 className="display-6 mb-4">Our Courses Upskill You With Driving Training</h1>
      </div>
      <div className="row g-4 justify-content-center">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
            <div className="text-center p-4 pt-0">
              <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">$99</div>
              <h5 className="mb-3">Automatic Car Lessons</h5>
              <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item small"><i className="fa fa-signal text-primary me-2" />Beginner</li>
                <li className="breadcrumb-item small"><i className="fa fa-calendar-alt text-primary me-2" />3 Week</li>
              </ol>
            </div>
            <div className="position-relative mt-auto">
              <img className="img-fluid" src="img/courses-1.jpg" alt />
              <div className="courses-overlay">
                <a className="btn btn-outline-primary border-2" href>Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
            <div className="text-center p-4 pt-0">
              <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">$99</div>
              <h5 className="mb-3">Highway Driving Lesson</h5>
              <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item small"><i className="fa fa-signal text-primary me-2" />Beginner</li>
                <li className="breadcrumb-item small"><i className="fa fa-calendar-alt text-primary me-2" />3 Week</li>
              </ol>
            </div>
            <div className="position-relative mt-auto">
              <img className="img-fluid" src="img/courses-2.jpg" alt />
              <div className="courses-overlay">
                <a className="btn btn-outline-primary border-2" href>Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
            <div className="text-center p-4 pt-0">
              <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">$99</div>
              <h5 className="mb-3">International Driving</h5>
              <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item small"><i className="fa fa-signal text-primary me-2" />Beginner</li>
                <li className="breadcrumb-item small"><i className="fa fa-calendar-alt text-primary me-2" />3 Week</li>
              </ol>
            </div>
            <div className="position-relative mt-auto">
              <img className="img-fluid" src="img/courses-3.jpg" alt />
              <div className="courses-overlay">
                <a className="btn btn-outline-primary border-2" href>Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
          <div className="bg-primary text-center p-5">
            <h1 className="mb-4">Make Appointment</h1>
            <form>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="text" className="form-control border-0" id="gname" placeholder="Gurdian Name" />
                    <label htmlFor="gname">Your Name</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="email" className="form-control border-0" id="gmail" placeholder="Gurdian Email" />
                    <label htmlFor="gmail">Your Email</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="text" className="form-control border-0" id="cname" placeholder="Child Name" />
                    <label htmlFor="cname">Courses Type</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="text" className="form-control border-0" id="cage" placeholder="Child Age" />
                    <label htmlFor="cage">Car Type</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{height: 100}} defaultValue={""} />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-dark w-100 py-3" type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Courses End */}
  {/* Features Start */}
  <div className="container-xxl py-6">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="text-primary text-uppercase mb-2">Why Choose Us!</h6>
          <h1 className="display-6 mb-4">Best Driving Training Agency In Your City</h1>
          <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <div className="row gy-5 gx-4">
            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex align-items-center mb-3">
                <div className="flex-shrink-0 btn-square bg-primary me-3">
                  <i className="fa fa-check text-white" />
                </div>
                <h5 className="mb-0">Fully Licensed</h5>
              </div>
              <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
            </div>
            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
              <div className="d-flex align-items-center mb-3">
                <div className="flex-shrink-0 btn-square bg-primary me-3">
                  <i className="fa fa-check text-white" />
                </div>
                <h5 className="mb-0">Online Tracking</h5>
              </div>
              <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
            </div>
            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
              <div className="d-flex align-items-center mb-3">
                <div className="flex-shrink-0 btn-square bg-primary me-3">
                  <i className="fa fa-check text-white" />
                </div>
                <h5 className="mb-0">Afordable Fee</h5>
              </div>
              <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
            </div>
            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
              <div className="d-flex align-items-center mb-3">
                <div className="flex-shrink-0 btn-square bg-primary me-3">
                  <i className="fa fa-check text-white" />
                </div>
                <h5 className="mb-0">Best Trainers</h5>
              </div>
              <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="position-relative overflow-hidden pe-5 pt-5 h-100" style={{minHeight: 400}}>
            <img className="position-absolute w-100 h-100" src="img/about-1.jpg" alt style={{objectFit: 'cover'}} />
            <img className="position-absolute top-0 end-0 bg-white ps-3 pb-3" src="img/about-2.jpg" alt style={{width: 200, height: 200}} />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Features End */}
  {/* Team Start */}
  <div className="container-xxl py-6">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 500}}>
        <h6 className="text-primary text-uppercase mb-2">Meet The Team</h6>
        <h1 className="display-6 mb-4">We Have Great Experience Of Driving</h1>
      </div>
      <div className="row g-0 team-items">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item position-relative">
            <div className="position-relative">
              <img className="img-fluid" src="img/team-1.jpg" alt />
              <div className="team-social text-center">
                <a className="btn btn-square btn-outline-primary border-2 m-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-outline-primary border-2 m-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-outline-primary border-2 m-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="bg-light text-center p-4">
              <h5 className="mt-2">Full Name</h5>
              <span>Trainer</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item position-relative">
            <div className="position-relative">
              <img className="img-fluid" src="img/team-2.jpg" alt />
              <div className="team-social text-center">
                <a className="btn btn-square btn-outline-primary border-2 m-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-outline-primary border-2 m-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-outline-primary border-2 m-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="bg-light text-center p-4">
              <h5 className="mt-2">Full Name</h5>
              <span>Trainer</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item position-relative">
            <div className="position-relative">
              <img className="img-fluid" src="img/team-3.jpg" alt />
              <div className="team-social text-center">
                <a className="btn btn-square btn-outline-primary border-2 m-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-outline-primary border-2 m-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-outline-primary border-2 m-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="bg-light text-center p-4">
              <h5 className="mt-2">Full Name</h5>
              <span>Trainer</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item position-relative">
            <div className="position-relative">
              <img className="img-fluid" src="img/team-4.jpg" alt />
              <div className="team-social text-center">
                <a className="btn btn-square btn-outline-primary border-2 m-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-outline-primary border-2 m-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-outline-primary border-2 m-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="bg-light text-center p-4">
              <h5 className="mt-2">Full Name</h5>
              <span>Trainer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
  {/* Testimonial Start */}
  <div className="container-xxl py-6">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 500}}>
        <h6 className="text-primary text-uppercase mb-2">Testimonial</h6>
        <h1 className="display-6 mb-4">What Our Clients Say!</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
          <div className="owl-carousel testimonial-carousel">
            <div className="testimonial-item text-center">
              <div className="position-relative mb-5">
                <img className="img-fluid rounded-circle mx-auto" src="img/testimonial-1.jpg" alt />
                <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{width: 60, height: 60}}>
                  <i className="fa fa-quote-left fa-2x text-primary" />
                </div>
              </div>
              <p className="fs-4">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
              <hr className="w-25 mx-auto" />
              <h5>Client Name</h5>
              <span>Profession</span>
            </div>
            <div className="testimonial-item text-center">
              <div className="position-relative mb-5">
                <img className="img-fluid rounded-circle mx-auto" src="img/testimonial-2.jpg" alt />
                <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{width: 60, height: 60}}>
                  <i className="fa fa-quote-left fa-2x text-primary" />
                </div>
              </div>
              <p className="fs-4">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
              <hr className="w-25 mx-auto" />
              <h5>Client Name</h5>
              <span>Profession</span>
            </div>
            <div className="testimonial-item text-center">
              <div className="position-relative mb-5">
                <img className="img-fluid rounded-circle mx-auto" src="img/testimonial-3.jpg" alt />
                <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{width: 60, height: 60}}>
                  <i className="fa fa-quote-left fa-2x text-primary" />
                </div>
              </div>
              <p className="fs-4">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
              <hr className="w-25 mx-auto" />
              <h5>Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
  {/* Footer Start */}
  <div className="container-fluid bg-dark text-light footer my-6 mb-0 py-6 wow fadeIn" data-wow-delay="0.1s">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h4 className="text-white mb-4">Get In Touch</h4>
          <h2 className="text-primary mb-4"><i className="fa fa-car text-white me-2" />Drivin</h2>
          <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
          <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
          <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Quick Links</h4>
          <a className="btn btn-link" href>About Us</a>
          <a className="btn btn-link" href>Contact Us</a>
          <a className="btn btn-link" href>Our Services</a>
          <a className="btn btn-link" href>Terms &amp; Condition</a>
          <a className="btn btn-link" href>Support</a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Popular Links</h4>
          <a className="btn btn-link" href>About Us</a>
          <a className="btn btn-link" href>Contact Us</a>
          <a className="btn btn-link" href>Our Services</a>
          <a className="btn btn-link" href>Terms &amp; Condition</a>
          <a className="btn btn-link" href>Support</a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Newsletter</h4>
          <form action>
            <div className="input-group">
              <input type="text" className="form-control p-3 border-0" placeholder="Your Email Address" />
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <h6 className="text-white mt-4 mb-3">Follow Us</h6>
          <div className="d-flex pt-2">
            <a className="btn btn-square btn-outline-light me-1" href><i className="fab fa-twitter" /></a>
            <a className="btn btn-square btn-outline-light me-1" href><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-square btn-outline-light me-1" href><i className="fab fa-youtube" /></a>
            <a className="btn btn-square btn-outline-light me-0" href><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid copyright text-light py-4 wow fadeIn" data-wow-delay="0.1s">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          © <a href="#">Your Site Name</a>, All Right Reserved.
        </div>
        <div className="col-md-6 text-center text-md-end">
          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
          Designed By <a href="https://htmlcodex.com">HTML Codex</a>
          <br />Distributed By: <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
</div>


    );
}

export default Home;