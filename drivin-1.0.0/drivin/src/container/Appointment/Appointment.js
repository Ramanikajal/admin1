import React from 'react';

function Appointment(props) {
    return (
       <div>
  {/* Page Header Start */}
  <div className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn" data-wow-delay="0.1s">
    <div className="container text-center">
      <h1 className="display-4 text-white animated slideInDown mb-4">Appointment</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
          <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
          <li className="breadcrumb-item text-primary active" aria-current="page">Appointment</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Appointment Start */}
  <div className="container-xxl py-6">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{minHeight: 400}}>
            <img className="position-absolute w-100 h-100" src="assets/img/about-1.jpg" alt style={{objectFit: 'cover'}} />
            <img className="position-absolute top-0 start-0 bg-white pe-3 pb-3" src="assets/img/about-2.jpg" alt style={{width: 200, height: 200}} />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
          <h6 className="text-primary text-uppercase mb-2">Appointment</h6>
          <h1 className="display-6 mb-4">Make An Appointment To Pass Test &amp; Get A License On The First Try</h1>
          <form>
            <div className="row g-3">
              <div className="col-sm-6">
                <div className="form-floating">
                  <input type="text" className="form-control border-0 bg-light" id="gname" placeholder="Gurdian Name" />
                  <label htmlFor="gname">Your Name</label>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-floating">
                  <input type="email" className="form-control border-0 bg-light" id="gmail" placeholder="Gurdian Email" />
                  <label htmlFor="gmail">Your Email</label>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-floating">
                  <input type="text" className="form-control border-0 bg-light" id="cname" placeholder="Child Name" />
                  <label htmlFor="cname">Courses Type</label>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-floating">
                  <input type="text" className="form-control border-0 bg-light" id="cage" placeholder="Child Age" />
                  <label htmlFor="cage">Car Type</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea className="form-control border-0 bg-light" placeholder="Leave a message here" id="message" style={{height: 150}} defaultValue={""} />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Appointment End */}
</div>



    );
}

export default Appointment;