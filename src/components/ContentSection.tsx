import React from 'react';
import './ContentSection.css';

interface ContentSectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, description, image, reverse = false }) => {
  return (
    <section className={`content-section ${reverse ? 'reverse' : ''}`}>
      <div className="content-text">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="#" className="btn-tertiary">En savoir plus</a>
      </div>
      <div className="content-image-container">
        <img src={image} alt={title} className="content-image" />
      </div>
    </section>
  );
};

export default ContentSection;