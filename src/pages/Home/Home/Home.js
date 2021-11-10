import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import Offers from '../Offers/Offers';

const Home = () => {
    return (

        //Home Page Items
        <div id='home'>
            <Banner></Banner>
            <Offers></Offers>
            <FAQ></FAQ>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;