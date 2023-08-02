// src/Form.js
import React, { useState } from 'react';


const Form = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const [formErrors, setFormErrors] = useState({
      name: '',
      email: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      setFormErrors((prevState) => ({
        ...prevState,
        [name]: '',
      }));
    };
  
    const validateForm = () => {
      let isValid = true;
      const { name, email } = formData;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      const errors = {};
  
      if (!name.trim()) {
        errors.name = 'Name is required';
        isValid = false;
      }
  
      if (!email.trim()) {
        errors.email = 'Email is required';
        isValid = false;
      } else if (!emailPattern.test(email)) {
        errors.email = 'Invalid email format';
        isValid = false;
      }
  
      setFormErrors(errors);
      return isValid;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        // Form submission logic here
        console.log(formData);
      }
    };
  
    return (
      <form onSubmit={handleSubmit} style={formStyles}>
        <div style={inputContainer}>
          <label style={labelStyles}>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyles}
            />
          </label>
          {formErrors.name && <span style={errorStyles}>{formErrors.name}</span>}
        </div>
        <div style={inputContainer}>
          <label style={labelStyles}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyles}
            />
          </label>
          {formErrors.email && <span style={errorStyles}>{formErrors.email}</span>}
        </div>
        <div style={inputContainer}>
          <label style={labelStyles}>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={textareaStyles}
            />
          </label>
        </div>
        <div style={inputContainer}>
          <button type="submit" style={submitButtonStyles}>
            Submit
          </button>
        </div>
      </form>
    );
  };

  export default Form

// Styling
const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '0 auto',
};

const inputContainer = {
  marginBottom: '15px',
};

const labelStyles = {
  marginBottom: '5px',
  fontSize: '16px',
  fontWeight: 'bold',
};

const inputStyles = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '100%',
};

const textareaStyles = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '100%',
  height: '100px',
};

const submitButtonStyles = {
  padding: '10px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const errorStyles = {
    
}
