import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ServiceDetailsContent from '../components/Services/ServiceDetailsContent';
import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner
                    pageTitle="Mobile App Development"
                    BGImage="bg-one"
                />

                <ServiceDetailsContent />

                <CtaArea />

                <Footer />
            </>
        );
    }
}

export default ServiceDetails;
