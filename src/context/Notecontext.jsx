import { createContext, useEffect, useState } from "react";
import BACKEND_URL from "../api/Url";

export const Notecontext = createContext();

export const NoteProvider=({children})=>{
    const [notes, setNotes] = useState([]);
const [loading, setLoading] = useState(true);

// fetch all notes
const getNotes = async() => {
    setLoading(true);
    try {
        const response = await BACKEND_URL.get("/get-notes");
        setNotes(response.data);
    } catch (error) {
        console.log("Error fetching notes:", error);
    } finally {
        setLoading(false);
    }
}

useEffect(()=>{
    getNotes();
},[])

// create a note
const createNote = async(note) => {
    const res=await BACKEND_URL.post("/create-note",note)
    setNotes([res.data,...notes])
}

// update a note
const updateNote = async(id, updateNote) => {
    const res=await BACKEND_URL.put(`/update-note/${id}`,updateNote)
    setNotes(notes.map((note)=>(note._id===id ? res.data : note)))
}

// delete a note
const deleteNote = async(id) => {
    await BACKEND_URL.delete(`/delete-note/${id}`)
    setNotes(notes.filter((note)=>(note._id!==id)))
}

return(
    <Notecontext.Provider value={{notes,loading,createNote,updateNote,deleteNote}}>
        {children}
    </Notecontext.Provider>
)
}
