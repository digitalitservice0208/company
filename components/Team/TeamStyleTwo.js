import React, { Component } from 'react';
import Link from 'next/link';

class TeamStyleTwo extends Component {
    render() {
        return (
            <>
                <div className="pt-100 pb-70 bg-fcfbfb">
                    <div className="container">
                        <div className="section-title">
                            <h2>All Team Members</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="team-card text-center">
                                    <div className="team-img">
                                        <img src="/images/team/team5.jpg" alt="Image" />
                                    </div>

                                    <div className="team-caption">
                                        <h3>Anderson</h3>
                                        <p>CEO & Founder</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="team-card text-center">
                                    <div className="team-img">
                                        <img src="/images/team/team6.jpg" alt="Image" />
                                    </div>

                                    <div className="team-caption">
                                        <h3>Rodriguez</h3>
                                        <p>React Developer</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="team-card text-center">
                                    <div className="team-img">
                                        <img src="/images/team/team7.jpg" alt="Image" />
                                    </div>

                                    <div className="team-caption">
                                        <h3>Thomas</h3>
                                        <p>Angular Developer</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TeamStyleTwo;
