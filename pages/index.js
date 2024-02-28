import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/DefaultHome/MainBanner';
import Services from '../components/DefaultHome/Services';
import About from '../components/DefaultHome/About';
import TeamStyle from '../components/Common/TeamStyle';
import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/Layouts/Footer';

class Index extends Component {
    render() {
        return (
            <>
                <Navbar />

                <MainBanner />

                <Services />

                <About />

                <TeamStyle />

                <CtaArea />

                <Footer />
            </>
        );
    }
}

export default Index;
