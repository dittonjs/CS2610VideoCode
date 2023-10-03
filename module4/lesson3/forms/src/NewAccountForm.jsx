import { useState } from "react"
import { ErrorMessage } from "./ErrorMessage";

export function NewAccountForm(props) {
  const {
    email,
    password,
    name,
    setEmail,
    setPassword,
    setName,
  } = props;


  function handleSubmit(e) {
    e.preventDefault()
    console.log(name, email, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
      <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
      <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button>Create Account </button>
    </form>
  )
}