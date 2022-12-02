import React from 'react';
import './ItemsSection.css'
const ItemsSection = () => {
    return (
        <div className=''>
            <div className="container">
                <div className="items-top-btn mb-5">
                    <button className='items-btn'>Breakfast</button>
                    <button className='items-btn items-active'>Lunch</button>
                    <button className='items-btn'>Dinner</button>
                </div>
                
            </div>
        </div>
    );
};

export default ItemsSection;