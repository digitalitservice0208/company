import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Newsletter from '../components/Common/Newsletter';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Contact Us"
                    BGImage="bg-one"
                />

                <ContactInfo />

                <ContactForm />

                <div className="ptb-100">
                    <Newsletter />
                </div>

                <Footer/>
            </>
        );
    }
}

export default Contact;
