import React from 'react';

function Features(props) {
    return (
        <div>{/* Page Header Start */}
<div className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn" data-wow-delay="0.1s">
  <div className="container text-center">
    <h1 className="display-4 text-white animated slideInDown mb-4">Features</h1>
    <nav aria-label="breadcrumb animated slideInDown">
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
        <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
        <li className="breadcrumb-item text-primary active" aria-current="page">Features</li>
      </ol>
    </nav>
  </div>
</div>
{/* Page Header End */}

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
            <img className="position-absolute w-100 h-100" src="assets/img/about-1.jpg" alt style={{objectFit: 'cover'}} />
            <img className="position-absolute top-0 end-0 bg-white ps-3 pb-3" src="assets/img/about-2.jpg" alt style={{width: 200, height: 200}} />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Features End */}
        </div>
    );
}

export default Features;