import React, { Component } from 'react';

class DesignServiceDetailContent extends Component {
    render() {
        return (
            <>
                <section className="services-details-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="services-details-desc">
                                    <h2>UX/UI Design</h2>
                                    <p>The UX design process can be divided into four key phases: user research, design,
                                        testing, and implementation.

                                        Creating the right look and feel for a site can make the difference between
                                        success and failure. That’s why our web projects focus on design and ease of
                                        use.
                                    </p>
                                    <div className="services-details-info">
                                        <p>You can track design progress live using:</p>
                                        <ul>
                                            <li>Figma Design</li>
                                            <li>Adobe XD</li>
                                            <li>Sketch</li>
                                            <li>Zeplin</li>
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

export default DesignServiceDetailContent;
