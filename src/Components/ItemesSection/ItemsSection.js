import React, { useEffect, useState } from 'react';
import { ListGroup } from 'reactstrap';
import './ItemsSection.css'
const ItemsSection = () => {
    const [lunchItems, setLunchItems] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/dev-rahim/react-red-onion-resturent/main/src/Fakedata/menusfakedata/lunch.json')
            .then(res => res.json())
            .then(data => setLunchItems(data))
    }, [])
    console.log(lunchItems);
    return (
        <div className=''>
            <div className="container">
                <div className="items-top-btn mb-5">
                    <button className='items-btn'>Breakfast</button>
                    <button className='items-btn items-active'>Lunch</button>
                    <button className='items-btn'>Dinner</button>
                </div>
                <div className="items-container">
                    <div className="row">
                        {
                            lunchItems.map(lunchItem => <div className=' col-lg-4 col-md-6 col-12 col-xl-4'>
                                <div className="lunch-item p-3 m-3 rounded-2">
                                    <img src={lunchItem.image} alt="" />
                                    <h4>{lunchItem.name}</h4>
                                    <p>{lunchItem.description}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div><br />

                <button className="btn btn-dark w-25" type="button">Checkout Your Food</button>
            </div>
        </div>
    );
};

export default ItemsSection;