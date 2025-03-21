import React from 'react';
import '../styles/FeaturedCategories.css'; // Assuming we use CSS for styling
import image from "../assets/images/blankets_295x.avif"
import cat1Image from "../assets/images/storage_baskets.webp"
import cat3Image from "../assets/images/bibs_and_burp.png";

const FeaturedCategories = () => {
  const categories = [
    { name: 'Baskets', image: cat1Image, rowSpan: 2, colSpan: 1 },
    { name: 'Blankets', image: image, rowSpan: 1, colSpan: 1 },
    { name: 'Bibs and Burp Cloth', image: cat3Image, rowSpan: 1, colSpan: 2 },
    { name: 'Animal Toys', image: image, rowSpan: 1, colSpan: 1 },
    { name: 'Loveys', image: image, rowSpan: 1, colSpan: 1 },
    { name: 'Dolls', image: image, rowSpan: 1, colSpan: 1 },
  ];

  return (
    <div className="featured-categories">
      <h2>Featured Categories</h2>
      <p>Hand crafted</p>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div className="category-card" key={index} style={{ gridRow: `span ${category.rowSpan}`,  gridColumn: `span ${category.colSpan}`}}>
            <div className="image-container">
              <img src={category.image} alt={category.name} />
              <div className="category-name">{category.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;