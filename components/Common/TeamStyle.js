import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='pe-7s-angle-left'></i>",
        "<i class='pe-7s-angle-right'></i>"
    ],
    responsive:{
        0: {
            items:1,
        },
        576: {
            items:2,
        },
        768: {
            items:2,
        },
        1000: {
            items:3,
        }
    }
}

class TeamStyle extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){
        this._isMounted = true;
        this.setState({ display: true })
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div className="ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Team</h2>
                        <h5>Our team members will help to progress.</h5>
                    </div>

                    {this.state.display ? <OwlCarousel
                    className="team-slider owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="team-card text-center">
                            <div className="team-img">
                                <img src="/images/team/1.jpg" alt="Image" />
                            </div>

                            <div className="team-caption">
                                <h3>Dedi Erianto Manullang</h3>
                                <p>CEO</p>
                            </div>
                        </div>

                        <div className="team-card text-center">
                            <div className="team-img">
                                <img src="/images/team/2.jpg" alt="Image" />
                            </div>

                            <div className="team-caption">
                                <h3>Stefan Vukotic</h3>
                                <p>CTO</p>
                            </div>
                        </div>

                        <div className="team-card text-center">
                            <div className="team-img">
                                <img src="/images/team/3.png" alt="Image" />
                            </div>

                            <div className="team-caption">
                                <h3>Carlos Devani Manullang</h3>
                                <p>CPO</p>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        );
    }
}

export default TeamStyle;
