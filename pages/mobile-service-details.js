import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import MobileAppServiceContentDetail from '../components/Services/MobileAppServiceContentDetail';
import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/Layouts/Footer';

class MobileAppServiceContentDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Mobile App Development"
                    BGImage="bg-one"
                />

                <MobileAppServiceContentDetail />

                <CtaArea />

                <Footer />
            </>
        );
    }
}

export default MobileAppServiceContentDetails;
