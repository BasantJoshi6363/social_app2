import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // State variables for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()  

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a data object with form values
    const formData = {
      email,
      password,
    };

    try {
      // Make a POST request using Axios
      const response = await axios.post('http://localhost:4000/api/login', formData);
        navigate("/home")
      // Handle successful response (you can customize this part)
      console.log('Form data submitted successfully:', response.data);

      // Optionally, reset form fields after successful submission
     
      setEmail('');
      setPassword('');
    } catch (error) {
      // Handle error (you can customize this part)
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '8px', maxWidth: '400px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>My Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ background: '#555', color: '#fff', padding: '10px', cursor: 'pointer', border: 'none', borderRadius: '5px', width: '100%' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
