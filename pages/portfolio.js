import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import WorksStyle from '../components/Portfolio/WorksStyle';
import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/Layouts/Footer';

class Portfolio extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Our Portfolio"
                    BGImage="bg-three"
                />

                <WorksStyle />

                <CtaArea />

                <Footer />
            </>
        );
    }
}

export default Portfolio;
