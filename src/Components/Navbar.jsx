import React from 'react'
import {Link} from 'react-router-dom'
import './Style/Navbar.css'

const Navbarfun = () => {
  var logo = require('../assets/image.png');

  return (
    <nav className='navbar navbar-expand-lg navbar-dark '>
        <Link to='/' className='navbar-brand'>
            <img src={logo} width="90"  className="d-inline-block align-top" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  mr-auto">
              <li className="nav-item active">
                  <Link className="nav-link" to='/schedule'>
                      Schedule
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to='/standings'>
                      Standing
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to='/rewards'>
                      Rewards
                  </Link>
              </li>
          </ul>
          <span className="navbar-text">
            <Link to='/login' >
                <button className="btn btn-outline-info " type="button">Login</button>
            </Link>
          </span>
        </div>
    </nav>

  );
}

export default Navbarfun