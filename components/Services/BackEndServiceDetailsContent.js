import React, {Component} from 'react';

class BackEndServiceDetailsContent extends Component {
    render() {
        return (
            <>
                <section className="services-details-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="services-details-desc">
                                    <h2>Backend development</h2>
                                    <p>Our back-end development services are not just about making a server,
                                        application, and database communicate with each other. It’s about building a
                                        product that works seamlessly, meet market needs and creating an enjoyable user
                                        experience that earns your clients loyalty.</p>
                                    <div className="services-details-info">
                                        <p>In backend development, we are using frameworks for enterprise solutions:</p>
                                        <ul>
                                            <li>PHP backend frameworks Laravel / Symfony</li>
                                            <li>Node.js - TypeScript framework Nest.js</li>
                                            <li>Node.js - Javascript framework Express.js</li>
                                            <li>Python backend frameworks Django / FastAPI</li>
                                            <li>Golang / Rust</li>
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

export default BackEndServiceDetailsContent;
