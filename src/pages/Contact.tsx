import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log('Données du formulaire soumises :', data);
    alert('Merci ! Votre message a été envoyé.');
    reset();
  };

  return (
    <div className="contact-page">
      <h1>Contactez-nous</h1>
      <p>N'hésitez pas à nous envoyer un message via le formulaire ci-dessous.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Le nom est requis.' })}
          />
          {typeof errors.name?.message === 'string' && (
            <span className="error-message">{errors.name.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { 
              required: 'L\'email est requis.',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Format d\'email invalide.'
              }
            })}
          />
          {typeof errors.email?.message === 'string' && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={5}
            {...register('message', { required: 'Le message est requis.' })}
          />
          {typeof errors.message?.message === 'string' && (
            <span className="error-message">{errors.message.message}</span>
          )}
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;