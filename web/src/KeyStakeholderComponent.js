import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Nav, Navbar} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import {loginStore} from "./LoginStore";
import {stakeholderStore} from "./StakeholderStore";
import {withRouter} from "react-router-dom";
import {observer} from "mobx-react";
import InputGroup from "react-bootstrap/InputGroup";


const KeyStakeholderComponent = withRouter(observer(({history}) => {
    return(
        <div>
            <Container>
                <Row>
                    <Col>{/*1 of 1*/}
                        <Navbar bg="light" expand="lg">
                            <img
                                alt="/web/public/dragon.png"
                                src="dragon.png"
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                                onClick={() => window.location = "/"}
                            />
                            <Navbar.Brand >Dragon Planner</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link onClick={()=>history.push("/stakeholdercomponent")}>Identificer Stakeholders</Nav.Link>
                                    <Nav.Link >Identificer Key Stakeholders</Nav.Link>
                                </Nav>
                                <Nav className="mr-sm-2">
                                    <Button variant="light" onClick={()=>{loginStore.Logud()}}>Log ud</Button>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
                <Row>
                    <Col> {/*1 of 3*/}

                    </Col>
                    <Col sm="9"> {/*2 of 3*/}
                            <Card style={{ width: '51.5rem' }}>
                                <Card.Body>
                                    <Card.Title>Identificer Key stakeholders</Card.Title>
                                    <Card.Text>
                                        I dette afsnit skal du identificere dine Keystakeholders ud fra D.A.N.C.E metoden.
                                        Hvad er D.A.N.C.E? <br /><br />
                                        <b>DECISIONS:</b> <br />
                                        Take deccision that influences the project budget <br /><br />

                                        <b>AUTHORITY:</b> <br />
                                        Have the authority to grant permission to proceed with the project.<br /><br />

                                        <b>NEED:</b> <br />
                                        Directly benefit from or are impacted by the project and consequently need to know all about it.<br /><br />

                                        <b>CONNECTIONS:</b> <br />
                                        Are connected to the people, money, or resources required to remove roadblocks or exert influence to ensure project success. These are the champions, the active supporters who will ensure your project's success.<br /><br />

                                        <b>ENERGY:</b> <br />
                                        Have positive or negative energy that could affect project success
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Navn på Stakeholder</th>
                                        <th>D</th>
                                        <th>A</th>
                                        <th>N</th>
                                        <th>C</th>
                                        <th>E</th>
                                    </tr>
                                </thead>
                                <tbody>
                                            {stakeholderStore.stakeholders.map((stakeholderName, key)=>
                                                <tr key={key}>
                                                    <td>{key+1}</td>
                                                    <td>{stakeholderName.name}</td>
                                                    <td>
                                                        <label>
                                                            <InputGroup.Prepend>
                                                                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                                            </InputGroup.Prepend>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <label>
                                                            <InputGroup.Prepend>
                                                                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                                            </InputGroup.Prepend>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <label>
                                                            <InputGroup.Prepend>
                                                                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                                            </InputGroup.Prepend>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <label>
                                                            <InputGroup.Prepend>
                                                                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                                            </InputGroup.Prepend>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <label>
                                                            <InputGroup.Prepend>
                                                                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                                            </InputGroup.Prepend>
                                                        </label>
                                                    </td>
                                                </tr>)}
                                </tbody>
                            </Table>
                    </Col>
                    <Col>
                        <Button variant="info" >Færdig</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}));

export default observer(KeyStakeholderComponent)