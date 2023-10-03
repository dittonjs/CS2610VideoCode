import { useState } from "react";
import { NewAccountForm } from "./NewAccountForm"
import { ErrorMessage } from "./ErrorMessage";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main>
      <ErrorMessage email={email} password={password} name={name} />
      <h1>Create Account!</h1>
      <NewAccountForm
        email={email}
        password={password}
        name={name}
        setEmail={setEmail}
        setPassword={setPassword}
        setName={setName}
      />
    </main>
  )
}

export default App
