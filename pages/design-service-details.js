import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import DesignServiceDetailContent from '../components/Services/DesignServiceDetailContent';
import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/Layouts/Footer';

class DesignServiceDetailContentDetail extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="UI / UX Design"
                    BGImage="bg-one"
                />

                <DesignServiceDetailContent />

                <CtaArea />

                <Footer />
            </>
        );
    }
}

export default DesignServiceDetailContentDetail;
