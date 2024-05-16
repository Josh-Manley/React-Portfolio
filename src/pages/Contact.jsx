import React, { useState } from 'react';
import Footer from '../components/Footer';

import { validateEmail } from '../utils/helpers';

export default function Contact() {
  const styles = {
    footer: {
      position: 'relative',
      bottom: '-150px',
    },
    h1: {
      marginTop: '20px',
      marginBottom: '20px',
    },
  };

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
      setNameError('');
    } else if (name === 'email') {
      setEmail(value);
      setEmailError('');
    } else if (name === 'message') {
      setMessage(value);
      setMessageError('');
    }
  };

  const handleBlur = e => {
    const { name, value } = e.target;

    if (name === 'name' && !value.trim()) {
      setNameError('Name is required');
    } else if (name === 'email' && !value.trim()) {
      setEmailError('Email is required');
    } else if (name === 'message' && !value.trim()) {
      setMessageError('Message is required');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Perform form submission logic here
    if (!name.trim()) {
      setNameError('Name is required');
    }

    if (!email.trim()) {
      setEmailError('Email is required');
    }

    if (!message.trim()) {
      setEmailError('Message is required');
    }
    if (!validateEmail(email)) {
      setMessageError('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    // Only proceed with submission if all required fields are filled
    if (name.trim() && email.trim() && message.trim()) {
      // Example: Call an API to submit the form data
      console.log('Form submitted:', { name, email, message });
    }
  };

  return (
    <div id="form">
      <h1 style={styles.h1}>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 w-50">
          <label htmlFor="Name" className="form-label col-form-label-lg">
            Name:
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {nameError && <small className="text-danger">{nameError}</small>}
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="Email" className="form-label col-form-label-lg">
            Email address:
          </label>
          <input
            type="email"
            className="form-control form-control-lg"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {emailError && <small className="text-danger">{emailError}</small>}
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="Message" className="form-label col-form-label-lg">
            Message:
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="5"
            name="message"
            value={message}
            onChange={handleInputChange}
            onBlur={handleBlur}
          ></textarea>
          {messageError && <small className="text-danger">{messageError}</small>}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div style={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
