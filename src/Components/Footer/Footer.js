import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark footer text-light mt-5'>
            <div className="container">
                <div className="row  text-start">
                    <div className="col-lg-8 mt-3">
                        <p>©Copyright 2022</p>
                    </div>
                    <div className="col-lg-2 mt-3">
                        <p>Privacy Policy</p>
                    </div>
                    <div className="col-lg-2 mt-3">
                        <p>Trams and Conditions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;