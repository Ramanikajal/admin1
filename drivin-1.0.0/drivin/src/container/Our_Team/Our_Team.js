import React from 'react';

function Our_Team(props) {
    return (
        <div>
            {/* Page Header Start */}
            <div className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center">
                    <h1 className="display-4 text-white animated slideInDown mb-4">Our Team</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">Our Team</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Team Start */}
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                        <h6 className="text-primary text-uppercase mb-2">Meet The Team</h6>
                        <h1 className="display-6 mb-4">We Have Great Experience Of Driving</h1>
                    </div>
                    <div className="row g-0 team-items">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item position-relative">
                                <div className="position-relative">
                                    <img className="img-fluid" src="assets/img/team-1.jpg" alt />
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
                                    <img className="img-fluid" src="assets/img/team-2.jpg" alt />
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
                                    <img className="img-fluid" src="assets/img/team-3.jpg" alt />
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
                                    <img className="img-fluid" src="assets/img/team-4.jpg" alt />
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
        </div>

    );
}

export default Our_Team;