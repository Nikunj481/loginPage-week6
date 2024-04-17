import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling

const FormComponent = ({formData, handleFormSubmit,handleInputChange,handleReset}) => {
    
 
  return (
    <div className="form-container">
      <h1>Form</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            min="17" // Updated to accept values greater than or equal to 17
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="interest">Interest:</label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Interest</option>
            <option value="cooking">Cooking</option>
            <option value="cricket">Cricket</option>
            <option value="hockey">Hockey</option>
            <option value="football">Football</option>
            <option value="polo">Polo</option>
            <option value="dance">Dance</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            pattern="[1-9][0-9]{9}"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-term">
          <label>
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              required
            />
            I agree
          </label>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
        
      </form>
    </div>
  );
};

export default FormComponent;
