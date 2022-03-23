import React, { useContext } from 'react'

import NoteContext from "../notes/NoteContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import { Card, Button } from 'react-bootstrap';
export const NoteItem = ({ note, updateNote, showAlert }) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context
    return (
        <>
            <Card style={{ width: '18rem', margin: '20px' }}>
                <Card.Body>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{note.tag}</Card.Subtitle>
                    <Card.Text>
                        {note.description}
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Button onClick={() => { updateNote(note) }}><FontAwesomeIcon icon={faEdit} /></Button>
                        <Button variant="danger" onClick={() => { deleteNote(note._id) }}><FontAwesomeIcon icon={faTrashCan} /></Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
