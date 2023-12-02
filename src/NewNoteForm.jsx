import { useState } from "react"

export function NewNoteForm (props) {
    const [newNote, setNewNote] = useState("")

    function handleSubmitBtn(e) {
        e.preventDefault()
        if (newNote === "") return

        props.onAdd(newNote)

        setNewNote("")
    }

    return (
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
    )
}