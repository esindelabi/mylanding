import React from 'react';
import Hero from '../components/Hero';
import ContentSection from '../components/ContentSection';
import image1 from '/home/modupes/Documents/projets/mylanding/src/assets/img/img2.jpg';
import image2 from '/home/modupes/Documents/projets/mylanding/src/assets/img/img3.jpg';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      
      <ContentSection
        title="Une approche axée sur les détails"
        description="Chaque projet est une opportunité de créer une expérience unique. Nous concevons des designs épurés qui mettent en valeur votre contenu et captivent votre audience."
        image={image1}
      />
      
      <ContentSection
        title="Solutions sur mesure pour votre succès"
        description="Du concept à la mise en ligne, nous travaillons main dans la main pour développer des solutions web qui correspondent à vos objectifs et à l'identité de votre marque."
        image={image2}
        reverse 
      />
    </div>
  );
};

export default Home;