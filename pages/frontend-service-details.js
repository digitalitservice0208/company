import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FrontEndServiceDetailsContent from '../components/Services/FrontEndServiceDetailsContent';
import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/Layouts/Footer';

class FrontEndServiceDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Frontend development"
                    BGImage="bg-one"
                />

                <FrontEndServiceDetailsContent />

                <CtaArea />

                <Footer />
            </>
        );
    }
}

export default FrontEndServiceDetails;
