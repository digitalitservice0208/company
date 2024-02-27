import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ErrorContent from '../components/Error/ErrorContent';
import Footer from '../components/Layouts/Footer';

class Error extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="404 Error"
                    BGImage="bg-three"
                />

                <ErrorContent />

                <Footer />
            </>
        );
    }
}

export default Error;
