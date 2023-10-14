import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Navigation.css";

const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
