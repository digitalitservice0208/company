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
                                <p><a
                                  href="mailto:admin@digitalinformationtechnologygroup.tech">admin@digitalinformationtechnologygroup.tech</a>
                                </p>
                                <p><a
                                  href="mailto:info@digitalinformationtechnologygroup.tech">info@digitalinformationtechnologygroup.tech</a>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-map-2"></i>
                                </div>
                                <h3>Visit Here</h3>
                                <p>Jl. Tarutung No.25, Kota Pematang Siantar, <br/> 21124, Indonesia</p>
                            </div>
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-call"></i>
                                </div>
                                <h3>Call Here</h3>
                                <p><a href="tel:+62-895-611177856">+62 895 611177856</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.135071158123!2d99.06357056962194!3d2.9474409998142974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30318451191b20ad%3A0xfca99bc0fc27d6a4!2sJl.%20Tarutung%20No.25%2C%20Kristen%2C%20Kec.%20Siantar%20Sel.%2C%20Kota%20Pematang%20Siantar%2C%20Sumatera%20Utara%2021118%2C%20Indonesia!5e0!3m2!1sen!2sfr!4v1709102754241!5m2!1sen!2sfr"
                          width="100%" height="450" style="border:0;" allowFullScreen="" loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;
