import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>
{
    return(
        <div classname='navbar-container'>
            <ul className='nav-links'>
                <li className='nav-link'><Link className="home" to={'/'}>Home</Link></li>
                <li className='nav-link'><Link className="about" to={'/about'}>About</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;