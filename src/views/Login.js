import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Button, Image } from "react-bootstrap";
import logo from "../assets/logo.svg";

import "./Login.scss";

const Login = () => (
  <section className="login">
    <div>
      <Row>
        <Col className="text-center text-light">
          <Image src={logo} className="mb-5" />
          <Form className="login__container">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="lead">
                <strong>Número da Conta</strong>
              </Form.Label>
              <Form.Control type="number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="lead">
                <strong>Senha</strong>
              </Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group
              className="mb-5"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Link to="/dashboard">
              <Button variant="success" type="submit">
                Criar conta
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  </section>
);

export default Login;
