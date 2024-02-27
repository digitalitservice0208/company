import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProjectManagementServiceDetailContent from '../components/Services/ProjectManagementServiceDetailContent';
import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/Layouts/Footer';

class ProjectManagementServiceDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Project Management"
                    BGImage="bg-one"
                />

                <ProjectManagementServiceDetailContent />

                <CtaArea />

                <Footer />
            </>
        );
    }
}

export default ProjectManagementServiceDetails;
