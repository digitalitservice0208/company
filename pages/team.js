import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import TeamStyle from '../components/Common/TeamStyle';
import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/Layouts/Footer';

class Team extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner
                    pageTitle="Our Skilled Team"
                    BGImage="bg-one"
                />

                <TeamStyle />

                <CtaArea />

                <Footer />
            </>
        );
    }
}

export default Team;
