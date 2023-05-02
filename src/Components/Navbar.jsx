import React from 'react'
import {Link} from 'react-router-dom'
import './Style/Navbar.css'

const Navbarfun = () => {
    var logo = require('../assets/image.png');
    
    const handleOnLogout = (event) => {
        window.sessionStorage.setItem('loggedUser','');
        window.sessionStorage.setItem('loggedUserStay',false);
        window.sessionStorage.setItem('userToken','');

        window.location.reload();
    };

    const logged = [];
    if((window.sessionStorage.getItem('loggedUser')??'') !== '' ){

        logged.push(
            <React.Fragment key={2}>
                <Link to=''> HI, {window.sessionStorage.getItem('loggedUser')}</Link>
                <button className="btn btn-outline-danger " onClick={handleOnLogout} type="button">Logout</button>
            </React.Fragment>
        )
    }else{
        logged.push(
            <React.Fragment key={3}>
                <Link to='/signup'>
                    <button className="btn btn-outline-info " type="button">Signup</button>
                </Link>
                <Link to='/login' >
                    <button className="btn btn-outline-success " type="button">Login</button>
                </Link>
            </React.Fragment>
        )
    }

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
                    <Link className="nav-link" to='/'>
                        Home
                    </Link>
                </li>
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
                {logged}

            </span>
        </div>
    </nav>

    );
}

export default Navbarfun