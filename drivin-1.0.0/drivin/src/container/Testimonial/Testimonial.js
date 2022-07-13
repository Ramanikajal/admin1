import React from 'react';

function Testimonial(props) {
    return (
      <div>
  {/* Page Header Start */}
  <div className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn" data-wow-delay="0.1s">
    <div className="container text-center">
      <h1 className="display-4 text-white animated slideInDown mb-4">Testimonial</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
          <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
          <li className="breadcrumb-item text-primary active" aria-current="page">Testimonial</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
     {/* Testimonial Start */}
     <div className="container-xxl py-6">
          <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
              <h6 className="text-primary text-uppercase mb-2">Testimonial</h6>
              <h1 className="display-6 mb-4">What Our Clients Say!</h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                <div className="owl-carousel testimonial-carousel">
                  <div className="testimonial-item text-center">
                    <div className="position-relative mb-5">
                      <img className="img-fluid rounded-circle mx-auto" src="assets/img/testimonial-1.jpg" alt />
                      <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: 60, height: 60 }}>
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
                      <img className="img-fluid rounded-circle mx-auto" src="assets/img/testimonial-2.jpg" alt />
                      <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: 60, height: 60 }}>
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
                      <img className="img-fluid rounded-circle mx-auto" src="assets/img/testimonial-3.jpg" alt />
                      <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: 60, height: 60 }}>
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
</div>

    
    );
}

export default Testimonial;