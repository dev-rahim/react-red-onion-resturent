import React, { useEffect, useState } from 'react';
import './About.css'


const About = () => {
    const [aboutItems, setAboutItems] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/dev-rahim/react-red-onion-resturent/main/src/Fakedata/about.json')
            .then(res => res.json())
            .then(data => setAboutItems(data))
    }, [])
    return (
        <div className='About mt-5'>
            <div className="container">
                <div className="about-content text-start">
                    <h2>Why you choose us</h2>
                    <p className='w-50'>
                        Barton waited twenty always repair in within we do. An delighted offending
                        curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
                </div>
                <div className="about-carts row">
                    {
                        aboutItems.map(cart => <div className='col-md-4'>
                            <img className='img-fluid' src={cart.image} alt="" />
                            <div className="row ">
                                <div className="icon col-md-2">
                                    <p>hlw</p>
                                </div>
                                <div className="text-start cart-content col-md-10">
                                    <h5>{cart.title}</h5>
                                    <p className=''>{cart.description}</p>
                                    <a className='d-inline link-info nav-link' href="http://">See more</a>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default About;