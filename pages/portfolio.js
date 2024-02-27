import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import WorksStyle from '../components/Portfolio/WorksStyle';
import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/Layouts/Footer';

class Portfolio extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

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
