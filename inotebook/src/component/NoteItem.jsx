import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
export const NoteItem = ({ note }) => {
    return (
        <>
        
            <Card style={{ width: '18rem', margin: '20px' }}>
                <Card.Body>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Text>
                    {note.description}
                    </Card.Text>
                    <Button variant="danger">Delete</Button>
                </Card.Body>
            </Card>
        </>
    )
}
