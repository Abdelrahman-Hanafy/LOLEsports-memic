import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <Link to='/' className='title'>
            LOLStier
        </Link>
        <ul>
            <li>
                <Link to='/Champs'>
                    Champs
                </Link>
            </li>
            <li>
                <Link to='/Teams'>
                    Teams
                </Link>
            </li>
        </ul>
    </div>
  );
}

export default Navbar