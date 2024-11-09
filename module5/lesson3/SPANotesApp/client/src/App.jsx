import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import cookie from  "cookie";
import './App.css'

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);
  console.log(notes)

  async function getUser() {
    // TODO Implement
    const res = await fetch('/me/', {
      credentials: "same-origin",
    });
    const body = await res.json();
    setUser(body.user);
    setLoading(false);
  }

  async function getNotes() {
    const res = await fetch("/notes/", {
      credentials: "same-origin",
    })

    const body = await res.json();
    setNotes(body.notes)
  }

  useEffect(() => {
    getUser();
    getNotes();
  }, [])

  async function logout() {
    const res = await fetch("/registration/logout/", {
      credentials: "same-origin", // include cookies!
    });

    if (res.ok) {
      // navigate away from the single page app!
      window.location = "/registration/sign_in/";
    } else {
      // handle logout failed!
    }
  }

  async function createNote(e) {
    e.preventDefault(); // don't submit the form!
    console.log()
    const res = await fetch("/notes/", {
      method: "post",
      credentials: "same-origin",
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": cookie.parse(document.cookie).csrftoken
      }
    })
    const body = await res.json();
    console.log(body)

    setNotes([...notes, body.note]);
  }

  return (
    <div className="content">
      {loading && <div>Loading...</div>}
      {user && <div>Hello {user.first_name}</div>}
      <button onClick={logout}>Logout</button>
      <form onSubmit={createNote} className="new-note-form">
        Title
        <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
        Content
        <textarea cols="30" rows="10" value={content} onChange={e => setContent(e.target.value)}></textarea>
        <button>Save</button>
      </form>
      <div>
        {notes.map(note => (
          <div key={note.id}>
            <h2>{note.title}</h2>
            {note.content}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
