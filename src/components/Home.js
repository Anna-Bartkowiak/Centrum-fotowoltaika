import React from 'react';
import HomeHeader from './HomeHeader';
import Navigation from './Navigation';
import HomeAboutUs from './HomeAboutUs';
import Offer from './Offer';
import GallerySection from './Gallery';
import Contact from './Contact';

export const Home = () => {
    return (
        <>
            <Navigation />
            <HomeHeader />
            <HomeAboutUs />
            <Offer />
            <GallerySection />
            <Contact />
        </>
    );
};

export default Home;

