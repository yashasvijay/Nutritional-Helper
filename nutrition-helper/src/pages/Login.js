import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react";
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useNavigate } from "react-router-dom";

async function loginUser(credentials) {

  return fetch('http://localhost:9000', {
 
    method: 'POST',
 
    headers: {
 
      'Content-Type': 'application/json'
 
    },
 
    body: JSON.stringify(credentials)
 
  })
 
    .then(data => data.json())
 
 }

function Login({ setToken }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
      return email.length > 0 && password.length > 0 && email.includes('@') && email.includes('.com');
    }

    const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
        email,
        password
      });
      setToken(token);
    }

    const navigate = useNavigate();

    return (
    <div className="login-wrapper">
        <h1>Log In</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </Form.Group>

            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </Form.Group>

            <Button controlId="submitButton" block type="submit" disabled={!validateForm()} onClick={() => navigate('home')}>
              Submit
            </Button>
        </Form>
    </div>
  );
}

Login.propTypes = {

  setToken: PropTypes.func.isRequired

}

export default Login