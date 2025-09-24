import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>Créez un site web vitrine moderne et impactant</h1>
        <p>Valorisez votre activité et atteignez de nouveaux clients avec un design professionnel et une expérience utilisateur soignée.</p>
        <div className="hero-buttons">
          <a href="#" className="btn-primary">Découvrir le projet</a>
          <a href="#" className="btn-secondary">Contactez-nous</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;