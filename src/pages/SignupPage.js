import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="page form-page animate-slide-up">
      <div className="form-header">
        <h1 className="page-title">
          Create your<br />
          <span style={{ color: '#1c1c1e' }}>PopX account</span>
        </h1>
      </div>

      <form className="form-body" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="fullName">
            Full Name<span style={{ color: '#6c25be' }}>*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter full name"
            value={form.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="phone">
            Phone number<span style={{ color: '#6c25be' }}>*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter phone number"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="email">
            Email address<span style={{ color: '#6c25be' }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email address"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="password">
            Password<span style={{ color: '#6c25be' }}>*</span>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="company">Company name</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Enter company name"
            value={form.company}
            onChange={handleChange}
          />
        </div>

        <div className="radio-group">
          <label className="radio-label">
            Are you an Agency?<span style={{ color: '#6c25be' }}>*</span>
          </label>
          <div className="radio-options">
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={form.isAgency === 'yes'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={form.isAgency === 'no'}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <div className="form-action">
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
