import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h4>À Propos de Nous</h4>
          <p>Valorisez votre activité et atteignez de nouveaux clients avec un design professionnel et une expérience utilisateur soignée.</p>
        </div>
        
        <div className="footer-section links">
          <h4>Liens Rapides</h4>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section contact">
          <h4>Contactez-nous</h4>
          <p>Email: yoohoo@gmail.com</p>
          <p>Téléphone: +229 0142000000</p>
        </div>
        
        <div className="footer-section social">
          <h4>Suivez-nous</h4>
          <div className="social-links">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Areoh. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;