import { useEffect, useState } from 'react'


function App() {
  const [movie, setMovie] = useState(null);
  async function getRandomMovie() {
    const res = await fetch("/random/", {
      credentials: "same-origin", // include cookies!
    });
    const body = await res.json();
    setMovie(body.movie);
  }

  useEffect(() => {
    // TODO: load a random movie
    getRandomMovie()
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

  return (
    <>
      {
        movie && (
          <div>You should go watch {movie.original_title}!</div>
        )
      }
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default App;
