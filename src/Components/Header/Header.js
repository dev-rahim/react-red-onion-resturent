import React from 'react';
import Menubar from '../Shared/MenuBar/Menubar';
import './Header.css'

const Header = () => {
    return (
        <>
            <Menubar />
            <div className="align-items-center header-banner">
                <div className="header-content pt-5  d-flex justify-content-center container flex-column align-items-center">
                    <h1 className='pt-5 mt-5'>Best Food is waiting for your belly</h1>
                    <div className=" header-from mb-3 mt-3  w-50 d-flex flex-row">
                        <input type="text" className="" placeholder="Search here" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;