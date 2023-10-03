export function ErrorMessage(props) {
  if (!props.email) {
    return <div>Email connot be blank!</div>
  }
  if (!props.name) {
    return <div>Name connot be blank!</div>
  }
  if (!props.password) {
    return <div>Password cannot be blank!</div>
  }
  return null;
}