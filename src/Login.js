// LoginSignUp.js
import React, { useState } from 'react';

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="form-container">
      <div className={`form-box ${isSignUp ? 'sign-up-mode' : ''}`}>
        <div className="form-header">
          <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
        </div>
        <form className="form">
          {isSignUp && (
            <div className="input-box">
              <input type="text" placeholder="Full Name" required />
            </div>
          )}
          <div className="input-box">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>
          {isSignUp && (
            <div className="input-box">
              <input type="password" placeholder="Confirm Password" required />
            </div>
          )}
          <button type="submit" className="submit-btn">
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <div className="form-footer">
          <p>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button className="toggle-btn" onClick={toggleForm}>
              {isSignUp ? 'Login' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
