import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BackEndServiceDetailsContent from '../components/Services/BackEndServiceDetailsContent';
import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/Layouts/Footer';

class BackendServiceDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Backend development"
                    BGImage="bg-one"
                />

                <BackEndServiceDetailsContent />

                <CtaArea />

                <Footer />
            </>
        );
    }
}

export default BackendServiceDetails;
