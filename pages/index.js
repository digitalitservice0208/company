import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/DefaultHome/MainBanner';
import Services from '../components/DefaultHome/Services';
import About from '../components/DefaultHome/About';
import OurWorks from '../components/DefaultHome/OurWorks';
import TeamStyle from '../components/Common/TeamStyle';
import LatestNewsSlider from '../components/Common/LatestNewsSlider';
import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/Layouts/Footer';

class Index extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <MainBanner />

                <Services />

                <About />

                <OurWorks />

                <TeamStyle />

                <LatestNewsSlider />

                <CtaArea />

                <Footer />
            </>
        );
    }
}

export default Index;
