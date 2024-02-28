import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesDetails from '../components/DefaultHome/Services';
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

                <ServicesDetails />

                <CtaArea />

                <Footer />
            </>
        );
    }
}

export default Services;
