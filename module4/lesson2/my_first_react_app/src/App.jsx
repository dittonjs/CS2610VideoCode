import { Input } from "./Input";

export const App = () => {
  return (
    <form>
      <Input label="Name" type="text" />
      <Input label="Email" type="email" />
      <Input label="Password" type="password" />
    </form>
  )
}
