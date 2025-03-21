import React from "react";
import "../styles/CollectionSection.css"; // Assuming you have some basic styles
import image from "../assets/images/bibs_and_burp.png"
import { Link } from "react-router-dom";

const collections = [
    {
        id: 1,
        name: "Summer Collection",
        image: image,
        description: "Explore our summer collection with vibrant colors and patterns.",
    },
    {
        id: 2,
        name: "Winter Collection",
        image: image,
        description: "Stay warm and stylish with our winter collection.",
    },
    {
        id: 3,
        name: "Spring Collection",
        image: image,
        description: "Refresh your wardrobe with our spring collection.",
    },
];

const CollectionSection = () => {
    return (
        <section className="collection-section">
            <h2 className="section-title">Our Collections</h2>
            <div className="collection-grid">
                {collections.map((collection) => (
                    <div key={collection.id} className="collection-item">
                        <img
                            src={collection.image}
                            alt={collection.name}
                            className="collection-image"
                        />
                        <h3 className="collection-name">{collection.name}</h3>
                        <p className="collection-description">
                            {collection.description}
                        </p>
                        <Link to="/shop">
                            <button className="shop-now-button">Shop Now</button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CollectionSection