import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="about-image">
                                <img src="/images/about-img1.jpg" alt="image" className="rounded-10" />
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="about-content about-content-two">
                                <div className="section-title">
                                    <h2>About Us</h2>
                                    <p>We have better services in this city for features</p>
                                </div>

                                <div className="about-text">
                                    <h4>Who We Are</h4>
                                    <p>With 10+ years of experience working on software solutions we expanded our co-operation with companies in 6 different countries.</p>
                                </div>

                                <div className="about-text">
                                    <h4>Our History</h4>
                                    <p>We are building a great history of our company</p>
                                </div>

                                <div className="about-text">
                                    <h4>Our Mission</h4>
                                    <p>The mission is to deliver the best and highest quality products in the age of mobility and technical innovation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
