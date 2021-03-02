import React from 'react';
import HomeHeaderNav from './HomeHeaderNav';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';
// import HomeContact from './HomeContact';

export const Home = () => {
    return (
        <>
            <HomeHeaderNav />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            {/* <HomeContact /> */}
        </>
    );
};

export default Home;

