import React, { useContext } from 'react'
import NoteContext from "../notes/NoteContext"
import { NoteItem } from './NoteItem';

export const Notes = () => {

    const context = useContext(NoteContext);
    const { userNotes, setNotes } = context

    return (
        <>
            {userNotes.map((note) => {
                return <NoteItem note = {note} />;
            })}
        </>
    )
}
export default Notes;