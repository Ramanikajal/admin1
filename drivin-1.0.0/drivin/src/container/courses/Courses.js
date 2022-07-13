import React from 'react';

function Courses(props) {
    return (
        <div>
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
            <img className="img-fluid" src="assets/img/courses-1.jpg" alt />
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
            <img className="img-fluid" src="assets/img/courses-2.jpg" alt />
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
            <img className="img-fluid" src="assets/img/courses-3.jpg" alt />
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
</div>

    );
}

export default Courses;