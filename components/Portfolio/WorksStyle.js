import React, { Component } from 'react';

const portfolios = [
    {
        img: "/images/works/1.jpg",
        title: "Landing Page",
        description: "Plant trees with your steps"
    },
    {
        img: "/images/works/2.png",
        title: "Admin Portal",
        description: "Patient Management System"
    },
    {
        img: "/images/works/3.png",
        title: "Mobile App Development",
        description: "Designing house via mobile"
    },
    {
        img: "/images/works/4.png",
        title: "Ecommerce Development",
        description: "Buy Drinks & Food Product"
    },
    {
        img: "/images/works/5.png",
        title: "Mobile App Development",
        description: "Efficient Mobile Application"
    },
    {
        img: "/images/works/6.png",
        title: "Web Development",
        description: "Custom portal as you go"
    },
];

class WorksStyle extends Component {
    render() {
        return (
            <>
                <section className="case-studies-area ptb-100 bg-fcfbfb">
                    <div className="container">
                        <div className="section-title">
                            <h2>Portfolio</h2>
                            <h5>We work to keep you on the top</h5>
                        </div>

                        <div className="row justify-content-center">
                            {portfolios.map((item, index) => (
                                <div className="col-lg-4 col-sm-6" key={index}>
                                    <div className="work-card">
                                        <img src={item.img} alt="image"/>

                                        <div className="content">
                                            <span>
                                                <a>{item.title}</a>
                                            </span>
                                            <h3>
                                                <a>{item.description}</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default WorksStyle;
