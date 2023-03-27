import React from 'react';
import "./Header.css";
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" />
                    </a>

                    <div className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search in Daraz" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;