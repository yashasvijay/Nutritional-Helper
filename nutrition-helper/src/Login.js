import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
    return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
    event.preventDefault();
    }

    const navigate = useNavigate();

    return (
    <div className="Login">
        <h1>Login</h1>
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

export default Login