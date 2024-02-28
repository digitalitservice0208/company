import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <>
                <div className="bg-fcfbfb ptb-100 pb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Services</h2>
                            <h5>We will Serve you to think as that you are the best</h5>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-comment bg-13c4a1"></i>
                                    <h3>
                                        <Link href="/backend-service-details">
                                            <a>Backend Development</a>
                                        </Link>
                                    </h3>
                                    <p>Our back-end development services are not just about making a server, application, and database communicate with each other.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-display2 bg-6610f2"></i>
                                    <h3>
                                        <Link href="/frontend-service-details">
                                            <a>Frontend Development</a>
                                        </Link>
                                    </h3>
                                    <p>It takes more than ‘just’ a frontend developer to create a software solution that is well designed and nice to use.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-light bg-ffb700"></i>
                                    <h3>
                                        <Link href="/project-management-details">
                                            <a>Project Management</a>
                                        </Link>
                                    </h3>
                                    <p>Bespoke Custom Software Consultancy & Engineering Services. For every project, we dedicate a project manager who will focus on your project and meet all your expectations.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-phone bg-fc3549"></i>
                                    <h3>
                                        <Link href="/mobile-service-details">
                                            <a>Mobile App Development</a>
                                        </Link>
                                    </h3>
                                    <p>We provide full-cycle mobile app development services. This includes expert business analysis, design and development of your mobile application from idea to launch.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-cart bg-00d280"></i>
                                    <h3>
                                        <Link href="/design-service-details">
                                            <a>UX/UI Design</a>
                                        </Link>
                                    </h3>
                                    <p>Creating the right look and feel for a site can make the difference between success and failure. That’s why our web projects focus on design and ease of use.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-users bg-ff612f"></i>
                                    <h3>
                                        <Link href="/testing-service-details">
                                            <a>QA Testing</a>
                                        </Link>
                                    </h3>
                                    <p>Identify errors and implement a correctional strategy before final deployment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Services;
