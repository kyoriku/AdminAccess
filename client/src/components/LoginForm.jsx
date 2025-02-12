import { useState } from 'react';
import axios from 'axios';
import Auth from '../utils/auth'; // Importing the Auth service

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(!newEmail ? 'Email is required' : '');
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(!newPassword ? 'Password is required' : '');
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInvalidEmail = () => {
    setEmailError(!email ? 'Email is required' : !isValidEmail(email) ? 'Invalid email address' : '');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    setEmailError(!email ? 'Email is required' : !isValidEmail(email) ? 'Invalid email address' : '');
    setPasswordError(!password ? 'Password is required' : '');

    if (email && password) {
      try {
        const response = await axios.post('/api/users/login', { email, password });

        if (response.status === 200) {
          const { token, user } = response.data;

          // Check if user object is valid
          if (user && Object.keys(user).length !== 0) {
            setSubmitStatus('Login successful');
            Auth.login(user); // Pass the user object to the Auth service
            window.location.reload();
          } else {
            setSubmitStatus('User data is invalid');
          }
        } else {
          setSubmitStatus('Invalid email or password');
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setSubmitStatus('Invalid email or password');
        } else {
          setSubmitStatus('An error occurred');
        }
        console.error('An error occurred', error);
      }
    }

    setSubmitting(false);
  };

  return (
    <div className='login-container'>
      {/* <h2>Login</h2> */}
      <form className='form login-form' onSubmit={handleFormSubmit}>
        <div className={`text-start mb-${emailError ? '0' : '4'}`}>
          <label htmlFor='email-login' className='form-label'>Email:</label>
          <input
            className={`form-control ${emailError ? 'is-invalid' : ''}`}
            type='text'
            id='email-login'
            placeholder='Enter Email'
            value={email}
            onChange={handleEmailChange}
            onBlur={handleInvalidEmail}
          />
          {emailError && <div className='text-danger'>{emailError}</div>}
        </div>
        <div className={`text-start mb-${passwordError ? '0' : '4'}`}>
          <label htmlFor='password-login' className='form-label'>Password:</label>
          <input
            className={`form-control ${passwordError ? 'is-invalid' : ''}`}
            type='password'
            id='password-login'
            placeholder='Enter Password'
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordChange}
          />
          {passwordError && <div className='text-danger'>{passwordError}</div>}
        </div>
        <div className=''>
          <button className='btn btn-primary' type='submit' disabled={submitting}>
            {submitting ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>
      {submitStatus && (
        <div className={`mt-3 mb-0 alert ${submitStatus.includes('successful') ? 'alert-success' : 'alert-danger'}`}>
          {submitStatus}
        </div>
      )}
    </div>
  );
};

export default Login;
