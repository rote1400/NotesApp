export function NoteItem({ completed, id, title,
toggleNote, deleteNote}) {
    return (
        <li>
            <label>
            <input 
                type="checkbox"
                checked={completed}
                onChange={e => toggleNote(id, e.target.checked)} 
            />
            {title}
            </label>
            <button 
                className="btn btn-danger" 
                onClick={() => deleteNote(id)}
            >
            Delete
            </button>
        </li>
    )
}