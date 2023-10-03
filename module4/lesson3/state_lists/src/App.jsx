import { useState } from 'react'

function App() {
  const [noteContent, setNoteContent] = useState("");
  const [notes, setNotes] = useState([]);

  function saveNote() {
    setNotes([...notes, noteContent])
    setNoteContent("")
  }

  function deleteNote(note) {
    const newState = [...notes];
    newState.splice(newState.indexOf(note), 1);
    setNotes(newState);
  }

  return (
    <>
      <h1>Notesasdf</h1>
      <div>
        <input
          type="text"
          value={noteContent}
          onChange={e => setNoteContent(e.target.value)}
        />
        <button onClick={saveNote}>Save</button>
      </div>
      <div>
        {
          notes.map((note) => {
            return (
              <div key={note}>
                {note}
                <button onClick={() => deleteNote(note)}>Delete Me!</button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
