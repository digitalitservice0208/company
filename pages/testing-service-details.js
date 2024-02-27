import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TestingServiceDetailContent from '../components/Services/TestingServiceDetailContent';
import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/Layouts/Footer';

class TestingServiceDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="QA Testing"
                    BGImage="bg-one"
                />

                <TestingServiceDetailContent />

                <CtaArea />

                <Footer />
            </>
        );
    }
}

export default TestingServiceDetails;
