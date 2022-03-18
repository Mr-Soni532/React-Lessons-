
import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = ({ children }) => {

    const notesInitial = [
        {
            "_id": "6228a179b00119a0443890e8",
            "user": "622837ca114d62110d390dac",
            "title": "My title 1 updated",
            "description": "my description 1 updated",
            "tag": "personal",
            "date": "2022-03-09T12:45:45.221Z",
            "__v": 0
        },
        {
            "_id": "6228a20eb00119a0443890f3",
            "user": "622837ca114d62110d390dac",
            "title": "My title 2",
            "description": "my description 2 ",
            "tag": "personal",
            "date": "2022-03-09T12:48:14.994Z",
            "__v": 0
        }
    ]
    const [userNotes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{userNotes, setNotes}}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteState;