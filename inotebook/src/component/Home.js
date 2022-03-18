import React from 'react'
import Notes from './Notes'
import { Container, Row, Form, Button } from 'react-bootstrap'
export const Home = () => {

    return (
        <Container>
            <h2 className="my-3">Add a Note</h2>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <Button variant="success">Add Note</Button>
            <hr />
            <br />
            <h1>Your Notes</h1>
            <Row>
                <Notes />
            </Row>

        </Container>
    )
}
