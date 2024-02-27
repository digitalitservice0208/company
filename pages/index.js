import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/DefaultHome/MainBanner';
import Services from '../components/DefaultHome/Services';
import About from '../components/DefaultHome/About';
import OurWorks from '../components/DefaultHome/OurWorks';
import Feedback from '../components/Common/Feedback';
import TeamStyleThree from '../components/Common/TeamStyleThree';
import FunFacts from '../components/Common/FunFacts';
import LatestNewsSlider from '../components/Common/LatestNewsSlider';
import CtaArea from '../components/Common/CtaArea';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';
import WorkProcess from '../components/DefaultHome/WorkProcess';

class Index extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <MainBanner />

                <Services />

                <About />

                <OurWorks />

                <WorkProcess />

                <Feedback />

                <TeamStyleThree />

                <FunFacts />

                <LatestNewsSlider />

                <CtaArea />

                <Partner />

                <Footer />
            </>
        );
    }
}

export default Index;
