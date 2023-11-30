import { NoteItem } from "./NoteItem"

export function NotesList({ notes, toggleNote, deleteNote }) {
    return (
        <ul className="list">
        {notes.length === 0 && "Empty"}
        {notes.map(note => {
          return (
            <NoteItem 
                {...note}
                key={note.id}
                toggleNote={toggleNote}
                deleteNote={deleteNote}
            />
          )
        })}
      </ul>
    )
}