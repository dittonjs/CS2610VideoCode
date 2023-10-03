import { useState } from "react";
import { Input } from "./Input";

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <form>
      <Input type="email" label="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <Input type="password" label="Password" value={password} onChange={e => setPassword(e.target.value)} />
    </form>
  )
}