    import Col from "react-bootstrap/Col";
    import {Nav} from "react-bootstrap";
    import Card from "react-bootstrap/Card";
    import Table from "react-bootstrap/Table";
    import Form from "react-bootstrap/Form";
    import Button from "react-bootstrap/Button";
    import Row from "react-bootstrap/Row";
    import StakeholderStore from "./StakeholderStore";

    const stakeholderstore  = new StakeholderStore();

    function IdentifyStackeholders() {
        return (
    <Row>
        <Col> {/*1 of 3*/}

            <Nav>
                <Nav.Item>
                    <Nav.Link >Identificer Stakeholders</Nav.Link>
                    <Nav.Link >Identificer Key Stakeholders</Nav.Link>
                    <Nav.Link >Project Scope Statement</Nav.Link>
                    <Nav.Link >Identificer arbejdsopgaver</Nav.Link>
                    <Nav.Link >Identificer risici</Nav.Link>
                    <Nav.Link >Vurder risici</Nav.Link>
                    <Nav.Link >Imødekom risici</Nav.Link>
                    <Nav.Link >Closing Checklist</Nav.Link>
                </Nav.Item>
            </Nav>

        </Col>
        <Col xs={6}> {/*2 of 3*/}
            <Card style={{ width: '33.6rem' }}>
                <Card.Body>
                    <Card.Title>Identificer Stakeholder</Card.Title>
                    <Card.Text>
                        I dette afsnit skal du identificere dine Stakeholders. En Stakeholder kan være en person eller organisation, der bliver vil blive påvirket af projektet, enten negativt eller positivt.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Navn på Stakeholder</th>
                    <th>E-mail på Stakeholder</th>
                </tr>
                </thead>
                <tbody>

                {stakeholderstore.stakeholders.map((stakeholderName, key)=>
                    <tr key={key}><td>{key+1}</td><td>{stakeholderName.name}</td><td>{stakeholderName.email}</td></tr>)}

                <tr>
                    <td> </td>
                    <td>
                        <Form.Row>
                            <Col sm={"9"}>
                                <Form.Control value={stakeholderstore.newStakeholderName} size="xs" type="text" placeholder="Indskriv navn" onChange={(e)=>stakeholderstore.newStakeholderName = e.target.value}/>
                            </Col>

                        </Form.Row>

                    </td>
                    <td>
                        <Form.Row>
                            <Col sm={"9"}>
                                <Form.Control value={stakeholderstore.newStakeholderEmail} size="xs" type="text" placeholder="Indskriv E-mail" onChange={(e)=>stakeholderstore.newStakeholderEmail = e.target.value}/>
                            </Col>
                            <Col>
                                <Button variant="outline-primary" onClick={()=>stakeholderstore.addStakeHolder()}>Tilføj</Button>
                            </Col>

                        </Form.Row>


                    </td>


                </tr>

                </tbody>

            </Table>

        </Col>
        <Col> {/*3 of 3*/}

            <Button variant="primary">Gå til næste side</Button>

        </Col>
    </Row>
        );
    }