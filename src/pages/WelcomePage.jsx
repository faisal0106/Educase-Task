import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="page splash-page animate-slide-up">
      <h1 className="page-title">Welcome to PopX</h1>
      <p className="page-subtitle">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,
      </p>

      <div className="btn-stack">
        <button
          className="btn btn-primary"
          onClick={() => navigate('/signup')}
        >
          Create Account
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
