import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = ({ children }) => {
    const host = "http://localhost:5000"
    const [userNotes, setNotes] = useState([])

    //! ------| Get all Note | 

    const getNotes = async () => {
        //API call
        const response = await fetch(`${host}/api/note/fetchnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIyODM3Y2ExMTRkNjIxMTBkMzkwZGFjIn0sImlhdCI6MTY0NjgyNjc4NX0.7NlhT5cy1laTw3PfHH0mWeGo5zfk14oEDYiYIZ0NX5Y'
            },
        });
        const json = await response.json()
        setNotes(json)
    }

    //! ------| ADD Note | 

    const addNote = async (title, description, tag) => {
        // Backend Logic 
        const response = await fetch(`${host}/api/note/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIyODM3Y2ExMTRkNjIxMTBkMzkwZGFjIn0sImlhdCI6MTY0NjgyNjc4NX0.7NlhT5cy1laTw3PfHH0mWeGo5zfk14oEDYiYIZ0NX5Y'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const noteJson = await response.json();
        // Client Side Logic
        setNotes(userNotes.concat(noteJson))
    }
    
    //! ------| Delete Note | 

    const deleteNote = async (id) => {

         // Backend Logic 
         await fetch(`${host}/api/note/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIyODM3Y2ExMTRkNjIxMTBkMzkwZGFjIn0sImlhdCI6MTY0NjgyNjc4NX0.7NlhT5cy1laTw3PfHH0mWeGo5zfk14oEDYiYIZ0NX5Y'
            },
        });
        // Client side Logic
        const newNotes = userNotes.filter((note) => note._id !== id)
        setNotes(newNotes)
    }

    //! ------| Edit Note | 
    
    const editNote = async (id, title, description, tag) => {

        //  Backend Logic
         await fetch(`${host}/api/note/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIyODM3Y2ExMTRkNjIxMTBkMzkwZGFjIn0sImlhdCI6MTY0NjgyNjc4NX0.7NlhT5cy1laTw3PfHH0mWeGo5zfk14oEDYiYIZ0NX5Y'
            },
            body: JSON.stringify({ id , title, description, tag })
        });
      
        let updatedNotes = JSON.parse(JSON.stringify(userNotes))
        //  Logic for client
        for (const element of updatedNotes) {
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
                break;
            }
        }
        setNotes(updatedNotes)
    }

    return (
        <NoteContext.Provider value={{ userNotes, setNotes, addNote, deleteNote, editNote, getNotes }}>
            {children}
        </NoteContext.Provider>
    )
}
 
export default NoteState;