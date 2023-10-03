import { useEffect, useState } from "react";

function App() {
  const [toast, setToast] = useState("");

  useEffect(() => {
    console.log("I just finished rendering!")
  }, []);

  useEffect(() => {
    if (toast != "") {
      setTimeout(() => {
        setToast("");
      }, 4000);
    }
  }, [toast]);

  return (
    <div>
      {toast && <div>{toast}</div>}
      <button onClick={() => setToast("I am a toast!")}>Click Me!</button>
    </div>
  )
}

export default App
