import React, { Component } from 'react';

class TestingServiceDetailContent extends Component {
    render() {
        return (
            <>
                <section className="services-details-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="services-details-desc">
                                    <h2>QA Manual / Automatic testing</h2>
                                    <p>Identify errors and implement a correctional strategy before final deployment.
                                    </p>
                                    <div className="services-details-info">
                                        <p> Our expertise lies in the following:</p>
                                        <ul>
                                            <li>Smoke Testing</li>
                                            <li>UI Testing</li>
                                            <li>Database Testing</li>
                                            <li>Functional and Regression Testing</li>
                                            <li>Product Verification Testing</li>
                                            <li>End to End Testing</li>
                                            <li>Contract Testing</li>
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

export default TestingServiceDetailContent;
