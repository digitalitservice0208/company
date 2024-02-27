import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        const currentYear = new Date().getFullYear();

        return (
            <>
                <footer className="footer-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="logo">
                                        <Link href="/">
                                            <a>
                                                <img src="/images/logo.png" alt="image"/>
                                            </a>
                                        </Link>
                                    </div>

                                    <p>The mission is to deliver the best and highest quality products in the age of
                                        mobility and technical innovation.</p>

                                    <ul className="social-links">
                                        <li>
                                            <a href="https://www.linkedin.com/company/digital-information-technology-group/"
                                               target="_blank">
                                                <i className="icofont-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget ml-4">
                                    <h3>Services</h3>

                                    <ul className="list">
                                        <li>
                                            <Link href="/backend-service-details">
                                                <a>Backend Development</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/frontend-service-details">
                                                <a>Frontend Development</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/project-management-details">
                                                <a>Project Management</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/mobile-service-details">
                                                <a>Mobile App Development</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/design-service-details">
                                                <a>UX/UI Design</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/testing-service-details">
                                                <a>QA Testing</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget ml-4 pl-5">
                                    <h3>Explore</h3>

                                    <ul className="list">
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>About</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>Services</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/portfolio">
                                                <a>Portfolio</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/team">
                                                <a>Team</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Get in Touch</h3>

                                    <ul className="get-in-touch">
                                        <li>
                                            <i className="icofont-home"></i>
                                            Jl. Tarutung No.25, <br/>
                                            Kota Pematang Siantar, <br/>
                                            21124,Indonesia
                                        </li>
                                        <li>
                                            <i className="icofont-live-support"></i>
                                            <p><a href="tel:+62-895-611177856">+62 895 611177856</a></p>
                                        </li>
                                        <li>
                                            <i className="icofont-envelope"></i>
                                            <p><a href="mailto:hello@pungent.com">hello@pungent.com</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="container">
                            <p>Copyright &copy; {currentYear}. All Rights Reserved By <a href="/" target="_blank">Digital
                                Information Technology Group</a></p>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;
