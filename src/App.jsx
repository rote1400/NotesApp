import { useEffect, useState } from "react"
import { NewNoteForm } from "./NewNoteForm"
import { NotesList } from "./NotesList"
import "./styles.css"

export default function App() {
  const [notes, setNotes] = useState(() => {
    const localNotes = localStorage.getItem("NOTES")
    if (localNotes == null) return []

    return JSON.parse(localNotes)
  })

  console.log(notes)

  useEffect(() => {
    localStorage.setItem("NOTES", JSON.stringify(notes))
  }, [notes])

  function addNote(title) {
    setNotes(currentNotes => {
      return [
          ...currentNotes,
          { id: crypto.randomUUID(), title, completed: false},
      ]
      })
  }

  function toggleNote(id, completed) {
    setNotes(currentNotes => {
      return currentNotes.map(note => {
        if (note.id === id) {
          return { ...note, completed}
        }
        return note
      })
    })
  }

  function deleteNote(id) {
    setNotes(currentNotes => {
      return currentNotes.filter(note => note.id != id)
    })
  }
  
  return (
    <div>
      <NewNoteForm onAdd={addNote} />
      <h1 className="header">Todo List</h1>
      <NotesList 
        notes = {notes} 
        toggleNote={toggleNote}
        deleteNote={deleteNote} 
      />
    </div>
  )
}
