import React, { Component } from 'react';

class MobileAppServiceContentDetail extends Component {
    render() {
        return (
            <>
                <section className="services-details-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="services-details-desc">
                                    <h2>Mobile App Development</h2>
                                    <p>We provide full-cycle mobile app development services. This includes expert
                                        business analysis, design and development of your mobile application from idea
                                        to launch, integrating the new product into your infrastructure and providing
                                        further optimization and scale-up on demand.
                                    </p>
                                    <div className="services-details-info">
                                        <p>We build mobile applications on different platforms using top-notch technologies
                                            and proven approaches. Our smartphone app development services include:</p>
                                        <ul>
                                            <li>Native Android applications in Java</li>
                                            <li>Native iOS applications in Swift</li>
                                            <li>Native Multiplatform development in Kotlin</li>
                                            <li>Hybrid Mobile App Development in React Native</li>
                                            <li>Hybrid Mobile App Development in Flutter</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default MobileAppServiceContentDetail;
