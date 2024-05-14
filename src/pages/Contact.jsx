import React, { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
      setNameError('');
    } else if (name === 'email') {
      setEmail(value);
      setEmailError('');
    }
  };

  const handleBlur = e => {
    const { name, value } = e.target;

    if (name === 'name' && !value.trim()) {
      setNameError('Name is required');
    } else if (name === 'email' && !value.trim()) {
      setEmailError('Email is required');
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

    // Only proceed with submission if all required fields are filled
    if (name.trim() && email.trim()) {
      // Example: Call an API to submit the form data
      console.log('Form submitted:', { name, email });
    }
  };

  return (
    <div>
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
            placeholder="email@example.com"
          />
          {emailError && <small className="text-danger">{emailError}</small>}
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="Message" className="form-label col-form-label-lg">
            Message:
          </label>
          <textarea className="form-control" id="message" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
