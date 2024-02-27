import React, { Component } from 'react';

class FrontEndServiceDetailsContent extends Component {
    render() {
        return (
            <>
                <section className="services-details-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="services-details-desc">
                                    <h2>Frontend development</h2>
                                    <p>It takes more than ‘just’ a frontend developer to create a software solution that
                                        is well designed and nice to use. From fonts and every colour, up to menus,
                                        sliders and animations – everything users see and can interact with must be
                                        well-thought. Frontend is a broad discipline that combines skills of developers,
                                        graphic designers and UX/UI specialists.</p>
                                    <div className="services-details-info">
                                        <p>In frontend development, we are using frameworks for enterprise solutions:</p>
                                        <ul>
                                            <li>Angular frontend framework</li>
                                            <li>React.js frontend library</li>
                                            <li>Vue.js frontend framework</li>
                                            <li>Svelte frontend framework</li>
                                            <li>Webpack - Module bundler</li>
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

export default FrontEndServiceDetailsContent;
