import React from 'react'
import Notes from './Notes'
import { Container, Row } from 'react-bootstrap'
export const Home = () => {

    return (
        <Container>
            <Row>
                <Notes />
            </Row>
        </Container>
    )
}
