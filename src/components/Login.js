import React, { useState } from 'react';
import { Form, Button, Row, Col, Spinner } from 'react-bootstrap';

function Login(props) {
  const [validated, setValidated] = useState(false);

  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      handleLogin();

      setTimeout(() => {
        console.log("LogedIn");
      }, 1000);
    }

    setValidated(true);
  };

  return (
    <Row className="h-100 justify-content-center align-items-center">
      <Col className="mx-auto" md={6}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoFocus
              required
            />
            {emailError && <Form.Control.Feedback type="invalid">
              {emailError}
            </Form.Control.Feedback>}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {passwordError && <Form.Control.Feedback type="invalid">
              {passwordError}
            </Form.Control.Feedback>}
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Login
          </Button>
          <p className="text-right my-3">Have an account? <a href="#" target="_blank">Sign in</a></p>
        </Form>
      </Col>
    </Row>
  )
}

export default Login
