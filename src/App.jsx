import "./styles.css"

export default function App() {
  return (
    <div>
      <form className="new-note-form">
        <div className="form-row">
          <label htmlFor="note">New note</label>
          <input type="text" id="note" />
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
