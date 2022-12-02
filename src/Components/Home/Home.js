import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import ItemsSection from '../ItemesSection/ItemsSection';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Header />
            <ItemsSection />
            <About />
        </div>
    );
};

export default Home;