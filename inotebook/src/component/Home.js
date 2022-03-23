import React from 'react'
import Notes from './Notes'
import { Container, Row } from 'react-bootstrap'
export const Home = ({showAlert}) => {

    return (
        <Container>
            <Row>
                <Notes showAlert={showAlert}/>
            </Row>
        </Container>
    )
}
