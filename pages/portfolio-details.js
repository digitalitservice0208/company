import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PortfolioDetailsContent from '../components/Portfolio/PortfolioDetailsContent';
import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/Layouts/Footer';

class PortfolioDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="UX for Mobile Apps"
                    BGImage="bg-two"
                />

                <PortfolioDetailsContent />

                <CtaArea />

                <Footer />
            </>
        );
    }
}

export default PortfolioDetails;
