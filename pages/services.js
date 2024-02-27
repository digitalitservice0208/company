import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleOne from '../components/Services/ServicesStyleOne';
import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/Layouts/Footer';

class Services extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Our Services"
                    BGImage="bg-one"
                />

                <ServicesStyleOne />

                <CtaArea />

                <Footer />
            </>
        );
    }
}

export default Services;
