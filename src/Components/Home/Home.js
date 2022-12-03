import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ItemsSection from '../ItemesSection/ItemsSection';
import Register from '../Register/Register';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Header />
            <Register/>
            <ItemsSection />
            <About />
            <Footer />
        </div>
    );
};

export default Home;