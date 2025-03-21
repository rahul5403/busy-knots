import React from "react";
import "../styles/TrendingSection.css"; // Assuming you have some basic styles
import image from "../assets/images/bibs_and_burp.png"
import { Link } from "react-router-dom";

const trendingItems = [
    {
        id: 1,
        name: "Trendy Sneakers",
        image: image,
        description: "Step up your game with the latest trendy sneakers.",
    },
    {
        id: 2,
        name: "Designer Handbags",
        image: image,
        description: "Carry your essentials in style with our designer handbags.",
    },
    {
        id: 3,
        name: "Smart Watches",
        image: image,
        description: "Stay connected and stylish with our smart watches.",
    },
    {
        id: 4,
        name: "Smart Watches",
        image: image,
        description: "Stay connected and stylish with our smart watches.",
    },
    {
        id: 5,
        name: "Smart Watches",
        image: image,
        description: "Stay connected and stylish with our smart watches.",
    },
];

const TrendingSection = () => {
    return (
        <section className="trending-section">
            <h2 className="section-title">Trending Now</h2>
            <div className="trending-slider">
                {trendingItems.map((item) => (
                    <div key={item.id} className="trending-slide">
                        <div className="trending-slide-content">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="trending-image"
                            />
                            <div className="trending-info">
                                <h3 className="trending-name">{item.name}</h3>
                                <p className="trending-description">{item.description}</p>
                                <Link to="/shop">
                                    <button className="view-details-button">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrendingSection;
