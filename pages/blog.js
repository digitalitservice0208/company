import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogGridThree from '../components/Blog/BlogGridThree';
import Footer from '../components/Layouts/Footer';

class Blog extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Blog Grid"
                    BGImage="bg-three"
                />

                <BlogGridThree />

                <Footer/>
            </>
        );
    }
}

export default Blog;
