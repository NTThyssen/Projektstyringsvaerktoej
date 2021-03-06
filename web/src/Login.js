import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbar} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import {withRouter} from "react-router-dom";
import {observer} from "mobx-react";
import {Loginstates, loginStore} from "./LoginStore";
import "./index";


export const Login = withRouter(observer(({history}) => {


    return(

        <div className="login">
            <Container>
                <Row>

                    <Col>
                        <Navbar bg="light" expand="lg">
                            <img
                                alt="/web/public/dragon.png"
                                src="dragon.png"
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                                onClick={() => window.location.replace("")}
                            />
                            <Navbar.Brand>Dragon Planner - Login</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </Navbar>
                    </Col>

                </Row>
                <Row>
                    <Col>{/*1 of 3*/}

                    </Col>
                    <Col xs={6}>{/*2 of 3*/}
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" isInvalid = {loginStore.triedToLogin} value={loginStore.loginUsername} onChange={(e)=>{
                                    loginStore.loginUsername = e.target.value;}} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" isInvalid={loginStore.triedToLogin} value={loginStore.loginPassword} onChange={(e)=>{
                                    loginStore.loginPassword = e.target.value;
                                }}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={()=>{
                                loginStore.Login();
                                console.log("Performing login sequence");
                            }}>
                                Submit
                            </Button>
                            <Button onClick={()=>{window.deferredPrompt.prompt();}}>Installér som Native App</Button>
                        </Form>
                    </Col>
                    <Col>{/*3 of 3*/}

                    </Col>
                </Row>
            </Container>
        </div>
    )
}));



export default observer(Login)