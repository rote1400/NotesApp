import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newNote, setNewNote] = useState("")
  const [notes, setNotes] = useState([])

  function handleSubmitBtn(e) {
    e.preventDefault()
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
        <li>
          <label>
            <input type="checkbox" /> Note 1
          </label>
          <button className="btn btn-danger">
            Delete
          </button>
        </li>
        <li>
          <label>
            <input type="checkbox" /> Note 2
          </label>
          <button className="btn btn-danger">
            Delete
          </button>
        </li>
      </ul>
    </div>
  )
}
