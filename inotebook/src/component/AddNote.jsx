import React, { useContext, useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import NoteContext from "../notes/NoteContext"

export default function AddNote() {
    //! ----| Fetching Context |
    const context = useContext(NoteContext);
    const { addNote } = context

    //! ----| UseState for Note|
    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    //! ----| |
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <h2 className="my-3">Add a Note</h2>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="" onChange={onChange} name="title" value={note.title}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Tag</Form.Label>
                            <Form.Control type="text" placeholder="" onChange={onChange} name="tag" value={note.tag} />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={4} onChange={onChange} name="description" value={note.description} />
                </Form.Group>
            </Form>
            <Button variant="success" onClick={handleClick}>Add Note</Button>
            <hr />
            <br />
            <h1>Add New</h1>
        </>
    )
}
