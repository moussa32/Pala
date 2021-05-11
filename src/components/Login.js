import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function Login() {
  return (
    <Row className="h-100 justify-content-center align-items-center">
      <Col className="mx-auto" md={6}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Login
  </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default Login
