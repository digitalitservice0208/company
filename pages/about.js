import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/About/AboutContent';
import TeamStyle from '../components/Common/TeamStyle';

import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/Layouts/Footer';

class About extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner
                    pageTitle="About Us"
                    BGImage="bg-one"
                />

                <AboutContent />

                <TeamStyle />

                <CtaArea />

                <Footer/>
            </>
        );
    }
}

export default About;
