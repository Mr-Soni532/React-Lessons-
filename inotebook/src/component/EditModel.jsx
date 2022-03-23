import React, { useContext } from 'react'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import NoteContext from "../notes/NoteContext"


export default function EditModel({ modalShow, setModalShow, note, setNote, showAlert }) {

  
    //!   fetching context
    const context = useContext(NoteContext);
    const {  editNote } = context;
    //! ---| Onclick | Save
    const saveChanges = (e) => {
        e.preventDefault();
        editNote(note.id, note.editTitle, note.editDescription, note.editTag)
        setModalShow(false);
        showAlert('Updated successfully', 'success')
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <Modal
                show={modalShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton onClick={() => setModalShow(false)}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Note
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label><h5>Title</h5></Form.Label>
                                    <Form.Control type="text" placeholder="" name="editTitle" value={note.editTitle} onChange={onChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label><h5>Tag</h5></Form.Label>
                                    <Form.Control type="text" placeholder="" name="editTag" value={note.editTag} onChange={onChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label><h5>Description</h5></Form.Label>
                            <Form.Control as="textarea" rows={4} name="editDescription" value={note.editDescription} onChange={onChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant='danger' onClick={() => setModalShow(false)}>Close</Button> */}
                    <Button variant='success' onClick={saveChanges}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}

