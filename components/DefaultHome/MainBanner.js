import React, { Component } from 'react';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: false,
    items:1,
    navText: [
        "<i class='pe-7s-angle-left'></i>",
        "<i class='pe-7s-angle-right'></i>"
    ],
}

class MainBanner extends Component {
    state = {
        display: false
    }
    componentDidMount(){
        this.setState({ display: true })
    }

    render() {
        return (
            <>
                {this.state.display ? <OwlCarousel
                  className="hero-slider owl-carousel owl-theme"
                  {...options}
                >
                    <div className="hero-banner overly hero-bg8">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({isVisible}) => (
                                          <div className="main-banner-content text-center">
                                              <h1
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                }
                                              >
                                                  MAKING DIGITAL SOLUTIONS
                                              </h1>

                                              <p
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                }
                                              >
                                                  The mission is to deliver the best and highest quality products in the
                                                  age of mobility and technical innovation.
                                              </p>

                                              <div
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                }
                                              >
                                                  <Link href="/contact">
                                                      <a className="btn btn-primary">Hire us now</a>
                                                  </Link>

                                                  <Link href="/about">
                                                      <a className="btn btn-secondary">About us</a>
                                                  </Link>
                                              </div>
                                          </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-banner overly hero-bg9">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({isVisible}) => (
                                          <div className="main-banner-content text-center">
                                              <h1
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                }
                                              >
                                                  Web Development
                                              </h1>

                                              <p
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                }
                                              >
                                                  We use latest technologies and frameworks to build web and mobile apps
                                                  on high level.
                                              </p>

                                              <div
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                }
                                              >
                                                  <Link href="/contact">
                                                      <a className="btn btn-primary">Hire us now</a>
                                                  </Link>

                                                  <Link href="/about">
                                                      <a className="btn btn-secondary">About us</a>
                                                  </Link>
                                              </div>
                                          </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-banner overly hero-bg10">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({isVisible}) => (
                                          <div className="main-banner-content text-center">
                                              <h1
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                }
                                              >
                                                  Mobile App Development
                                              </h1>

                                              <p
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                }
                                              >
                                                  It is important to plan a web app in advance to avoid any confusion.
                                              </p>

                                              <div
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                }
                                              >
                                                  <Link href="/contact">
                                                      <a className="btn btn-primary">Hire us now</a>
                                                  </Link>

                                                  <Link href="/about">
                                                      <a className="btn btn-secondary">About us</a>
                                                  </Link>
                                              </div>
                                          </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-banner overly hero-bg11">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({isVisible}) => (
                                          <div className="main-banner-content text-center">
                                              <h1
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                }
                                              >
                                                  UI / UX Design
                                              </h1>

                                              <p
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                }
                                              >
                                                  Creating the right look and feel for a site can make the difference between success and failure.
                                              </p>

                                              <div
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                }
                                              >
                                                  <Link href="/contact">
                                                      <a className="btn btn-primary">Hire us now</a>
                                                  </Link>

                                                  <Link href="/about">
                                                      <a className="btn btn-secondary">About us</a>
                                                  </Link>
                                              </div>
                                          </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </>
        );
    }
}

export default MainBanner;
