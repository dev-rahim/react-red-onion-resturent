import React from 'react';
import './Register.css'
import logo2 from '../../images/logo2.png'

const Register = () => {
    return (
        <div className='Register my-5'>
            <div className="container">
                <div className="logo">
                    <img className='w-25' src={logo2} alt="" />
                </div>
                <div className="Register-from d-flex flex-column mx-auto">
                    <input className='p-3 rounded bg mb-3 mt-5' type="text" name="" placeholder='Name' id="" />
                    <input className='p-3 rounded bg mb-3' type="mail" name="" placeholder='Email' id="" />
                    <input className='p-3 rounded bg mb-3' type="mail" name="" placeholder='Email' id="" />
                    <input className='p-3 rounded bg mb-3' type="password" name="" placeholder='Password' id="" />
                    <input className='p-3 rounded bg mb-3' type="password" name="" placeholder='Confirm Password' id="" />
                    <input className='p-3 rounded bg mb-3' type="submit" name="Sign In" placeholder='Confirm Password' id="" />
                </div>
            </div>
        </div>

    );
};

export default Register;