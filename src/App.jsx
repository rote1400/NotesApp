import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newNote, setNewNote] = useState("")
  const [notes, setNotes] = useState([])

  function handleSubmitBtn(e) {
    e.preventDefault()

    setNotes(currentNotes => {
      return [
        ...currentNotes,
        { id: crypto.randomUUID(), title: newNote, completed: false},
      ]
    })

    setNewNote("")
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
      <form onSubmit={handleSubmitBtn} className="new-note-form">
        <div className="form-row">
          <label htmlFor="note">New note</label>
          <input 
            value={newNote}
            onChange={e => setNewNote(e.target.value)}
            type="text" 
            id="note" 
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {notes.length === 0 && "Empty"}
        {notes.map(note => {
          return (
            <li key={note.id}>
              <label>
                <input 
                  type="checkbox"
                  checked={note.completed}
                  onChange={e => toggleNote(note.id, e.target.checked)} 
                />
                {note.title}
              </label>
              <button 
                className="btn btn-danger" 
                onClick={() => deleteNote(note.id)}
              >
                Delete
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
