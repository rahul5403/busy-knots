import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturedCategories from "../components/FeaturedCategories";
import "../styles/Home.css";
import CollectionSection from "../components/CollectionSection";
import TrendingSection from "../components/TrendingSection";

const Home = () => {
  
  return (
    <div className="home-container bg-gradient-to-r from-blue-50 to-blue-100">
      <HeroSection />
      <AboutSection />
      <FeaturedCategories />
      <CollectionSection />
      <TrendingSection />
    </div>
  );
};

export default Home;