import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NoteContext from "../notes/NoteContext"
import AddNote from './AddNote';
import EditModel from './EditModel';
import { NoteItem } from './NoteItem';

export const Notes = ({ showAlert }) => {
    const navigate = useNavigate();
    //!   fetching context
    const context = useContext(NoteContext);
    const { userNotes, getNotes } = context;

    //!   Fetching saved Notes
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        } else {
            navigate('/login');
            console.log('redirected')
        }
        // eslint-disable-next-line
    }, [])

    //!   UseStates
    const [modalShow, setModalShow] = useState(false);
    const [note, setNote] = useState({ id: "", editTitle: "", editDescription: "", editTag: "" })

    //!   Update note function
    const updateNote = (currentNote) => {
        setNote({ id: currentNote._id, editTitle: currentNote.title, editDescription: currentNote.description, editTag: currentNote.tag })
        setModalShow(modalShow ? false : true)
    }
    return (
        <>
            {/*------| Update Window |--------*/}
            <EditModel modalShow={modalShow} setModalShow={setModalShow} note={note} setNote={setNote} showAlert={showAlert} />
            <AddNote showAlert={showAlert} />
            {userNotes.length === 0 && 'No available notes yet.'}
            {userNotes.map((note) => {
                return <NoteItem key={note._id} updateNote={updateNote} note={note} showAlert={showAlert} />;
            })}
        </>
    )
}
export default Notes;