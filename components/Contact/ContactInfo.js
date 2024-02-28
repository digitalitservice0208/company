import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-mail"></i>
                                </div>
                                <h3>Mail Here</h3>
                                <p><a href="mailto:admin@digitalinformationtechnologygroup.tech">admin@digitalinformationtechnologygroup.tech</a></p>
                                <p><a href="mailto:info@digitalinformationtechnologygroup.tech">info@digitalinformationtechnologygroup.tech</a></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-map-2"></i>
                                </div>
                                <h3>Visit Here</h3>
                                <p>Jl. Tarutung No.25, <br/> Kota Pematang Siantar, <br/> 21124, Indonesia</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-call"></i>
                                </div>
                                <h3>Call Here</h3>
                                <p><a href="tel:+62-895-611177856">+62 895 611177856</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;
