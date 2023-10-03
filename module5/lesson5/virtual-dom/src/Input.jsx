export function Input(props) {
  return (
    <label>
      {props.label}
      <input type={props.type} value={props.value} onChange={props.onChange} />
    </label>
  )
}