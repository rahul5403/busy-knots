import React from "react";
import { useParams } from "react-router-dom";
import "../styles/CategoryDetail.css";
import category1 from "../assets/images/product1.jpg";
import category2 from "../assets/images/product2.jpg";
import category3 from "../assets/images/product3.jpg"

const categories = [
    {
        id: 1,
        name: "Flower",
        description: "Explore a wide range of Flower and more.",
        products: [
            { id: 101, name: "flower1", image: category1 },
            { id: 102, name: "flower2", image: category2 },
            { id: 103, name: "flower3", image: category3 },
        ],
    },
    {
        id: 2,
        name: "cat-2",
        description: "Explore a wide range of Flower and more.",
        products: [
            { id: 201, name: "flower1", image: category1 },
            { id: 202, name: "flower2", image: category2 },
            { id: 203, name: "flower3", image: category3 },
        ],
    },
    {
        id: 3,
        name: "cat-3",
        description: "Explore a wide range of Flower and more.",
        products: [
            { id: 301, name: "flower1", image: category1 },
            { id: 302, name: "flower2", image: category2 },
            { id: 303, name: "flower3", image: category3 },
        ],
    },
    // Add more categories as needed
];

const CategoryDetail = () => {
    const { id } = useParams();
    const category = categories.find((cat) => cat.id === parseInt(id));

    if (!category) {
        return <div className="category-detail">Category not found!</div>;
    }

    return (
        <div className="category-detail ">
            <p className="category-description">{category.description}</p>
            <div className="product-grid-category">
                {category.products.map((product) => (
                    <div key={product.id} className="product-card-category">
                        <img src={product.image} alt={product.name} className="product-image-category" />
                        <h3 className="product-name-category">{product.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryDetail;
