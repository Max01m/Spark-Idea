import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p>Data Guardians Team</p>
                <p>©Все права защищены</p>
            </div>
            <div className="footer-right">
                <Link to="/aboutus">О нас</Link>
                <Link to="/contact">Обратная связь</Link>
            </div>
        </footer>
    );
};

export default Footer;
