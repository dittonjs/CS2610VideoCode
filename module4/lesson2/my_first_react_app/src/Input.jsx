export const Input = (props) => {
  console.log(props);
  return (
    <label>
      {props.label}
      <input type={props.type} />
    </label>
  )
}